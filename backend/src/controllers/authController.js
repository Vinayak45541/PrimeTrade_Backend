const User = require("../models/User");
const bcrypt = require("bcryptjs");
const generateToken = require("../utils/generateToken");

// @desc Register User
exports.register = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    // Validation
    if (!name || !email || !password) {
      throw new Error("All fields are required");
    }

    // Check existing user
    const userExists = await User.findOne({ email });
    if (userExists) {
      throw new Error("User already exists");
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const user = await User.create({
      name,
      email,
      password: hashedPassword
    });

    // Response with user info + token
    res.status(201).json({
      token: generateToken(user._id),
      name: user.name,
      email: user.email
    });

  } catch (err) {
    next(err);
  }
};


// @desc Login User
exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // Validation
    if (!email || !password) {
      throw new Error("All fields are required");
    }

    // Check user
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error("Invalid credentials");
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw new Error("Invalid credentials");
    }

    // Response with user info + token
    res.json({
      token: generateToken(user._id),
      name: user.name,
      email: user.email
    });

  } catch (err) {
    next(err);
  }
};