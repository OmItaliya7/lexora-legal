const sendEmail = require("../services/sendEmail");
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");
const axios = require("axios");
const crypto = require("crypto");
const generateToken = require("../utils/generateToken");
const { isValidEmail, isStrongPassword } = require("../utils/validation");

//registerUser
const registerUser = asyncHandler(async (req, res) => {
    const email = req.body.email?.trim().toLowerCase();
    const password = req.body.password?.trim();

    if (!email || !password) {
        res.status(400);
        throw new Error("Please provide all fields");
    }

    if (!isValidEmail(email)) {
        res.status(400);
        throw new Error("Please enter a valid email address");
    }

    if(email.length > 254){
        res.status(400);
        throw new Error("Email address is too long");
    }
    
    if(!isStrongPassword(password)){
      res.status(400);
      throw new Error("Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number");
    }

    // Check Existing User
    const userExists = await User.findOne({ email });

    if (userExists) {
        res.status(400);
        throw new Error("User already exists");
    }

    // Hash Password
    const salt = await bcrypt.genSalt(10);

    const hashedPassword = await bcrypt.hash(password, salt);

    // Create User
    const user = await User.create({email,password: hashedPassword});

    res.status(201).json({
        success: true,
        message: "User registered successfully",
        user: {id: user._id,email: user.email}
    });
});


//login User
const loginUser = asyncHandler(async (req, res) => {
    const email = req.body.email?.trim().toLowerCase();
    const password = req.body.password?.trim();
    // validate input
    if (!email || !password) {
      res.status(400);
      throw new Error("Please provide all fields");
    }

    if (!isValidEmail(email)) {
      res.status(400);
      throw new Error("Please enter a valid email address");
    }

    if(email.length > 254){
        res.status(400);
        throw new Error("Email address is too long");
    }

    // Find user
    const user = await User.findOne({ email }).select("+password");

    if (!user) {
      res.status(401);
      throw new Error("Invalid email or password");
    }

    if (user.provider === "google") {
      res.status(400);
      throw new Error("This account already uses Google Sign-In. Please continue with Google.");
    }

    //Check if account is locked
    if (user.lockUntil && user.lockUntil > Date.now()) {
      const remainingMinutes = Math.ceil(
        (user.lockUntil - Date.now()) / (60 * 1000)
      );

      res.status(401);
      throw new Error(`Account locked. Try again in ${remainingMinutes} minute(s).`);
    }

    // Compare password
    const isMatch = await bcrypt.compare(password,user.password);

    if (!isMatch) {
      user.loginAttempts += 1;
      // Lock account after 5 failed attempts
      if (user.loginAttempts === 5) {
        user.lockUntil = Date.now() +  10 * 60 * 1000; //10 min
        await user.save();
        res.status(401);
        throw new Error("Too many failed login attempts. Account locked for 10 minutes.");
      }
      await user.save();
      res.status(401);
      throw new Error("Invalid Email or Password");
    }

    // Reset login attempts after successful login
    user.loginAttempts = 0;
    user.lockUntil = null;
    await user.save();

    // Generate token
    const token = generateToken(user._id);

    res.status(200).json({
        success: true,
        token,
        user: {id: user._id, email: user.email}
    });
});


//googleAuth login/register
const googleAuth = asyncHandler(async (req, res) => {
    const { access_token } = req.body;

    if (!access_token) {
        res.status(400);
        throw new Error("Access token is required");
    }

    const googleResponse = await axios.get( "https://www.googleapis.com/oauth2/v2/userinfo", { headers: {Authorization: `Bearer ${access_token}` }});

    const { email } = googleResponse.data;
    
    if(email.length > 254){
      res.status(400);
      throw new Error("Email address is too long");
    }
    
    let user = await User.findOne({ email });
    
    if(user && user.provider === "local"){
        res.status(400);
        throw new Error("This email is already registered with Email & Password. Please login normally.");
    }

    //new google user
    if (!user) {
        user = await User.create({
            email,
            provider: "google",
        });
    }

    const token = generateToken(user._id);

    res.status(200).json({
        success: true,
        token,
        user: {id: user._id, email: user.email},
    });
});

//forgotPassword
const forgotPassword = asyncHandler(async (req, res) => {
  const email = req.body.email?.trim().toLowerCase();

  if (!email) {
    res.status(400);
    throw new Error("Email is required");
  }

  if(!isValidEmail(email)){
    res.status(400);
    throw new Error("Please enter a valid email address");
  }

  if(email.length > 254){
    res.status(400);
    throw new Error("Email address is too long");
  }

  const user = await User.findOne({ email });

  if (!user) {
    return res.status(200).json({
      success: true,
      message: "If an account exists, a password reset email has been sent."
    });
  }

  if(user.provider === "google"){
    res.status(400);
    throw new Error("This account is registered with Google Sign-In. Please continue with Google.");
  }

  const resetToken = crypto.randomBytes(32).toString("hex");

  user.resetPasswordToken = crypto.createHash("sha256").update(resetToken).digest("hex");

  user.resetPasswordExpire = Date.now() + 15 * 60 * 1000; // 15 minutes

  await user.save();
  const resetUrl = `${process.env.FRONTEND_URL}/reset-password/${resetToken}`;

  try {
    await sendEmail(
      user.email,
      "Reset Your Lexora Legal Password",
      `
      <div style="font-family: Arial, sans-serif;">
        <h2>Lexora Legal</h2>

        <p>Hello,</p>

        <p>
          You requested a password reset.
        </p>

        <p>
          Click the button below to reset your password:
        </p>

        <a href="${resetUrl}" style="background:#FC8608; color:white; padding:12px 24px; text-decoration:none; border-radius:6px; display:inline-block;">
          Reset Password
        </a>

        <p style="margin-top:20px;">
          This link expires in 15 minutes.
        </p>

        <p>
          If you didn't request this, ignore this email.
        </p>
      </div>
      `
    );
  } catch (error) {
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;
    await user.save();
    res.status(500);
    throw new Error("Failed to send reset email");
  }

  res.status(200).json({
    success: true,
    message: "Password reset email sent successfully",
  });
});


//reset password
const resetPassword = asyncHandler(async (req, res) => {
  const  password  = req.body.password?.trim();

  if (!password) {
    res.status(400);
    throw new Error("Password is required");
  }

  if (!isStrongPassword(password)) {
    res.status(400);
    throw new Error("Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number");
  }

  const resetPasswordToken = crypto.createHash("sha256").update(req.params.token).digest("hex");

  const user = await User.findOne({resetPasswordToken,resetPasswordExpire: { $gt: Date.now() },});

  if (!user) {
    res.status(400);
    throw new Error("Invalid or expired reset token");
  }

  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(password,salt);

  user.resetPasswordToken = undefined;
  user.resetPasswordExpire = undefined;

  user.loginAttempts = 0;
  user.lockUntil = null;

  await user.save();

  res.status(200).json({
    success: true,
    message: "Password reset successful. Please login.",
  });
});


// change password
const changePassword = asyncHandler(async (req, res) => {

  const currentPassword = req.body.currentPassword?.trim();
  const newPassword = req.body.newPassword?.trim();
  const confirmPassword = req.body.confirmPassword?.trim();

  if (!currentPassword || !newPassword || !confirmPassword) {
    res.status(400);
    throw new Error("Please provide all fields");
  }

  if (!isStrongPassword(newPassword)) {
    res.status(400);
    throw new Error("Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number");
  }

  if (newPassword !== confirmPassword) {
    res.status(400);
    throw new Error("New password and confirm password do not match");
  }

if (currentPassword === newPassword) {
  res.status(400);
  throw new Error("New password must be different from current password");
}

const user = await User.findById(req.user._id).select("+password");

const isMatch = await bcrypt.compare(currentPassword, user.password);

if (!isMatch) {
    res.status(400);
    throw new Error("Current password is incorrect");
}

if(user.provider === "google"){
    res.status(400);
    throw new Error("This account is registered with Google Sign-In. Please continue with Google.");
}

const salt = await bcrypt.genSalt(10);

user.password = await bcrypt.hash(newPassword, salt);

await user.save();

res.status(200).json({
  success: true,
  message: "Password changed successfully",
  });
});


//get profile
const getProfile = asyncHandler(async (req, res) => {
    res.status(200).json({success: true, user: req.user });
});

module.exports = {
    registerUser,
    loginUser,
    getProfile,
    googleAuth,
    forgotPassword,
    resetPassword,
    changePassword,
};