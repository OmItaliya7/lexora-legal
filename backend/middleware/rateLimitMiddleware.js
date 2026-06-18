const rateLimit = require("express-rate-limit");

const loginLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 50,
    message: {
        success: false,
        message: "Too many login attempts. Please try again after 15 minutes."
    },
    standardHeaders: true,
    legacyHeaders: false,
});


const registerLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 15,
    message: {
        success: false,
        message:"Too many registration attempts. Please try again later."
    },
    standardHeaders: true,
    legacyHeaders: false,
});

const contactLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 5,
    message: {
        success: false,
        message:"Too many contact requests. Please try again later."
    },
    standardHeaders: true,
    legacyHeaders: false,
});

const forgotPasswordLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 5,
    message: {
        success: false,
        message: "Too many forgot password requests. Please try again later."
    },
    standardHeaders: true,
    legacyHeaders: false,
});

const resetPasswordLimiter = rateLimit({
    windowMs:15*60*1000,
    max:5,
    message:{
        success:false,
        message:"Too many reset attempts"
    },
    standardHeaders: true,
    legacyHeaders: false,
});

const changePasswordLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 5,

    message: {
        success: false,
        message:
        "Too many password change attempts. Please try again later."
    },

    standardHeaders:true,
    legacyHeaders:false
});

module.exports = { loginLimiter, registerLimiter, contactLimiter, forgotPasswordLimiter, resetPasswordLimiter, changePasswordLimiter };