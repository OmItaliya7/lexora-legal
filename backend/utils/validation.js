const isValidEmail = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

const isStrongPassword = (password) => {
  return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(password);
};

const isValidPhone = (phone) => {
  return /^[0-9]{10,15}$/.test(phone);
};

const isValidMessage = (message) => {
  return message?.trim().length >= 10;
};

module.exports = {
  isValidEmail,
  isStrongPassword,
  isValidPhone,
  isValidMessage
};