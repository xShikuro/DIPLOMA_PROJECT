require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const authRoutes = require("./routes/auth");



const app = express();
const PORT = 4000;

const messageRoutes = require("./routes/messages");
app.use("/api/messages", messageRoutes);


app.use(cors());
app.use(express.json());

app.use("/uploads", express.static("uploads"));

app.use("/auth", authRoutes);

app.get("/health", (req, res) => {
  res.json({ status: "server working" });
});

// 🔥 ВОТ ЭТО ВАЖНО
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("MongoDB error:", err));

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});