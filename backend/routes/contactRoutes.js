const express = require("express");

const { createContact } = require("../controllers/contactController");
const { contactLimiter } = require("../middleware/rateLimitMiddleware");

const router = express.Router();

// public routes
/**
 * @swagger
 * /contact:
 *   post:
 *     tags: [Contact]
 *     summary: Submit a contact form
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name: { type: string }
 *               email: { type: string }
 *               phone: { type: string }
 *               message: { type: string }
 *             required:
 *               - name
 *               - email
 *               - phone
 *               - message
 *     responses:
 *       201:
 *         description: Contact form submitted successfully
 */
router.post("/", contactLimiter, createContact);

module.exports = router;