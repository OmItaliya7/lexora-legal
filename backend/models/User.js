const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
      index: true,
    },

    password: {
      type: String,
      default: null,
      select: false,
    },

    provider: {
      type: String,
      enum: ["local", "google"],
      default: "local",
    },

    loginAttempts:{
      type: Number,
      default: 0,
    },
    
    lockUntil:{
      type: Date,
      default:null
    },

    resetPasswordToken: {
      type: String,
      index: true
    },

    resetPasswordExpire: {
      type: Date,
      index: true
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);