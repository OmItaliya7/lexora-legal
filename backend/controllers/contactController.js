const Contact = require("../models/Contact");
const { isValidEmail, isValidPhone, isValidMessage } = require("../utils/validation");

const asyncHandler =
  require("express-async-handler");

const createContact = asyncHandler(
  async (req, res) => {
    const name = req.body.name?.trim();
    const email = req.body.email?.trim().toLowerCase();
    const phone = req.body.phone?.trim();
    const service = req.body.service?.trim() || "";
    const message = req.body.message?.trim() || "";

    if (!name || !email || !phone || !message) {
      res.status(400);
      throw new Error("Please fill all required fields");
    }

    if (!isValidEmail(email)) {
      res.status(400);
      throw new Error("Please enter a valid email address");
    }

    if(!isValidPhone(phone)){
      res.status(400);
      throw new Error("Please enter a valid phone number");
    }

    if (!isValidMessage(message)) {
      res.status(400);
      throw new Error("Message must be at least 10 characters long");
    }

    await Contact.create({ name, email, phone, service, message });

    res.status(201).json({
      success: true,
      message: "Contact request submitted successfully",
    });
  }
);

module.exports = { createContact };