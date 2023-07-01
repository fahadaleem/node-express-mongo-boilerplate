const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/users/user");
const dotenv = require("dotenv");
const { getErrorMessage, getSuccessMessage } = require("../utils/messages");

const router = express.Router();
// Initialize dotenv
dotenv.config();

router.post("/login", async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      next({
        code: 404,
        message: "User with this email is not exist!!",
      });
    }

    // compare the password
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      next({
        code: 401,
        message: "Invalid password",
      });
    }

    // Generate JWT token.
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET_KEY);

    // Exclude the password field from the user object
    const userWithoutPassword = { ...user._doc };
    delete userWithoutPassword.password;

    res
      .status(200)
      .json({ success: true, user: { ...userWithoutPassword, token } });
  } catch (err) {
    next({
      code: 404,
      message: err.message,
    });
  }
});

router.post("/register", async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // Check if the user already exist exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      next({
        code: 409,
        message: getErrorMessage("emailExists"),
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await User.create({ email, password: hashedPassword });

    res.status(200).json({
      success: true,
      message: getSuccessMessage("userCreated"),
    });
  } catch (err) {
    console.log(err);
    next({
      code: 500,
      error: err.message,
    });
  }
});

module.exports = router;
