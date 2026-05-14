const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const Message = require("../models/Message");

// 📥 получить все сообщения
router.get("/", authMiddleware, async (req, res) => {
  try {
    const messages = await Message.find()
      .populate("user", "nickname avatar") // подтягиваем пользователя
      .sort({ createdAt: 1 });

    res.json(messages);
  } catch (error) {
    console.log("Get messages error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// 📤 отправить сообщение
router.post("/", authMiddleware, async (req, res) => {
  try {
    const { text } = req.body;

    if (!text) {
      return res.status(400).json({ message: "Text required" });
    }

    const message = await Message.create({
      text,
      user: req.user.id,
    });

    const populatedMessage = await message.populate("user", "nickname avatar");

    res.json(populatedMessage);
  } catch (error) {
    console.log("Send message error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;