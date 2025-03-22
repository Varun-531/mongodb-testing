const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const multer = require("multer");
const cloudinary = require("cloudinary").v2;
const fs = require("fs");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Validate required environment variables
const requiredEnv = ["MONGO_URL"];
requiredEnv.forEach((key) => {
  if (!process.env[key]) {
    console.error(`❌ Missing required environment variable: ${key}`);
    process.exit(1);
  }
});


// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err);
    process.exit(1); // Exit if MongoDB connection fails
  });

const CLERK_BASE_URL = "https://api.clerk.dev/v1";

app.get("/test",(req,res)=>{
  res.send("Testing");
});

app.get("/", (req, res) => {
  res.send("Welcome to Testing IDX.<br>Try <a href='/test'>/test</a>");
});

// Start Server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
