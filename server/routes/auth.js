const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const multer = require("multer");
const User = require("../models/User"); // 🔥 ВАЖНО

// Multer storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  }
});

const upload = multer({ storage });

/*
================================
REGISTER
================================
*/
router.post("/register", async (req, res) => {
  try {
    const { nickname, email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Email and password required" });
    }

    const exists = await User.findOne({ email });
    if (exists) {
      return res.status(409).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      nickname,
      email,
      password: hashedPassword,
      avatar: "",
    });

    res.json({
      message: "User registered",
      user: {
        id: user._id,
        nickname: user.nickname,
        email: user.email,
        avatar: user.avatar,
        createdAt: user.createdAt
      }
    });
  } catch (error) {
    console.log("Register error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

/*
================================
LOGIN
================================
*/
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({
        message: "Invalid email or password"
      });
    }

    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return res.status(401).json({
        message: "Invalid email or password"
      });
    }

    const token = jwt.sign(
      {
        id: user._id,
        email: user.email
      },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.json({
      message: "Login successful",
      token,
      user: {
        id: user._id,
        nickname: user.nickname,
        email: user.email,
        avatar: user.avatar,
        createdAt: user.createdAt
      }
    });
  } catch (error) {
    console.log("Login error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

/*
================================
GET CURRENT USER
================================
*/
router.get("/me", authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({
      user: {
        id: user._id,
        nickname: user.nickname,
        email: user.email,
        avatar: user.avatar,
        createdAt: user.createdAt
      }
    });
  } catch (error) {
    console.log("Get me error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

/*
================================
UPLOAD AVATAR
================================
*/
router.post("/avatar", authMiddleware, upload.single("avatar"), async (req, res) => {
  try {
    const user = await User.findById(req.user.id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    user.avatar = req.file.filename;
    await user.save();

    res.json({
      message: "Avatar uploaded",
      avatar: user.avatar
    });
  } catch (error) {
    console.log("Avatar error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;