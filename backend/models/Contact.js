const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true, maxLength: 50 },
    email: { type: String, required: true, trim: true, lowercase:true },
    phone: { type: String, required: true, trim: true, maxLength: 15 },
    service: { type: String, default: "" },
    message: { type: String, required: true, trim: true, minLength: 10 ,maxLength: 1000 },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "Contact",
  contactSchema
);