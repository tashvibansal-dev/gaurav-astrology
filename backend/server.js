const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const authRoutes = require("./routes/authRoutes");
const appointmentRoutes = require("./routes/appointmentRoutes");
const questionRoutes = require("./routes/questionRoutes");
const reelRoutes = require("./routes/reelRoutes");
const horoscopeRoutes = require("./routes/horoscopeRoutes");

const app = express();

// Middleware
app.use(cors({
  origin: "http://localhost:3000",
  credentials: true
}));
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("Gaurav Astrology Backend Running");
});

console.log("authRoutes:", authRoutes);
console.log("appointmentRoutes:", appointmentRoutes);
console.log("questionRoutes:", questionRoutes);
console.log("reelRoutes:", reelRoutes);
console.log("horoscopeRoutes:", horoscopeRoutes);

// API routes
app.use("/api/auth", authRoutes);
app.use("/api/appointments", appointmentRoutes);
app.use("/api/questions", questionRoutes);
app.use("/api/reels", reelRoutes);
app.use("/api/horoscope", horoscopeRoutes);

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");
    app.listen(process.env.PORT, () => {
      console.log(`Server running on port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection failed:", err.message);
  });


