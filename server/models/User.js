const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    nickname: {
      type: String,
      default: "",
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true, // 🔥 вот это создаёт createdAt
  }
);

module.exports = mongoose.model("User", userSchema);