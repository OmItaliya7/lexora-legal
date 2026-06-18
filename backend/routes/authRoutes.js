const express = require("express");
const { loginLimiter, registerLimiter,forgotPasswordLimiter, resetPasswordLimiter, changePasswordLimiter } = require("../middleware/rateLimitMiddleware");

const router = express.Router();

const { registerUser, loginUser, getProfile, googleAuth, forgotPassword, resetPassword,changePassword } = require("../controllers/authController");
const protect = require("../middleware/authMiddleware");

//public routes
/**
 * @swagger
 * /auth/register:
 *   post:
 *     tags: [Authentication]
 *     summary: Register a new user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email: { type: string }
 *               password: { type: string }
 *             required:
 *               - email
 *               - password
 *     responses:
 *       201:
 *         description: User registered successfully
 */
router.post("/register",registerLimiter,registerUser);

/**
 * @swagger
 * /auth/login:
 *   post:
 *     tags: [Authentication]
 *     summary: Login  user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email: { type: string }
 *               password: { type: string }
 *             required:
 *               - email
 *               - password
 *     responses:
 *       200:
 *         description: User logged in successfully
 */
router.post("/login",loginLimiter,loginUser);


router.post("/google",loginLimiter,googleAuth);
/**
 * @swagger
 * /auth/forgot-password:
 *   post:
 *     tags: [Authentication]
 *     summary: Forgot password
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email: { type: string }
 *             required:
 *               - email
 *     responses:
 *       200:
 *         description: Forgot password successfully
 */
router.post("/forgot-password",forgotPasswordLimiter,forgotPassword);

router.post("/reset-password/:token",resetPasswordLimiter,resetPassword);

router.post("/change-password", protect, changePasswordLimiter, changePassword);

//protected routes
router.get("/profile", protect, getProfile);

module.exports = router;