// userController.js
const User = require('../models/User'); // Your user model

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const registerUser = async (req, res) => {
  // Your logic for registering a user
};

const loginUser = async (req, res) => {
  // Your logic for logging in a user
};

module.exports = {
  getAllUsers,
  registerUser,
  loginUser,
};
