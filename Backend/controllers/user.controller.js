const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const saltRounds = 10;
const secret_key = process.env.SECRET_KEY;

// CREATE USER
const createUser = async (req, res) => {
  try {
    const { name, email, password, city, phone } = req.body;

    // Basic check
    if (!name || !email || !phone || !password || !city) {
      return res.status(400).json({ error: "All fields are required." });
    }

    // Check if user exists
    const phone_existing = await User.findOne({ phone: phone.toString() });
    const email_existing = await User.findOne({ email });
    if (phone_existing || email_existing) {
      return res.status(409).json({ error: "User already exists." });
    }

    // Hash password
    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(password.toString(), salt);

    // Save user
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      phone: phone.toString(),
      city,
    });
    await newUser.save();

    res.status(201).json({
      message: "User created",
      user: { name, email, city, phone: phone.toString() },
    });
  } catch (err) {
    console.error("User creation error:", err.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

// LOGIN USER
const loginUser = async (req, res) => {
  const { phoneNo, password } = req.body;
  console.log(req.body);
  const phone = Number(phoneNo);

  try {
    const data = await User.findOne({ phone });
    if (!data) {
      return res
        .status(404)
        .json({ failed: "login failed", message: "User not found" });
    }

    const isPassMatched = await bcrypt.compare(
      password.toString(),
      data.password
    );

    if (isPassMatched && secret_key) {
      const token = jwt.sign({ phone: data.phone, _id: data._id }, secret_key);

      res
        .cookie("token", token, {
          httpOnly: true,
          sameSite: process.env.NODE_ENV === "production" ? "None" : "Lax",
          secure: process.env.NODE_ENV === "production",
        })
        .json({
          success: "login success",
          user: {
            name: data.name,
            role: data.role,
            email: data.email,
            issueReported: data.issueReported,
            city: data.city,
          },
        });
    } else {
      res.status(401).json({ status: "Wrong credentials" });
    }
  } catch (error) {
    console.error("Login error:", error.message);
    res.status(500).json({ status: "Server error" });
  }
};

// LOGOUT USER
const logOutUser = async (req, res) => {
  try {
    res.clearCookie("token");
    res.json({ success: "logout success" });
  } catch (error) {
    console.error("Logout error:", error.message);
    res.status(500).json({ error: "Logout failed" });
  }
};

module.exports = { createUser, loginUser, logOutUser };
