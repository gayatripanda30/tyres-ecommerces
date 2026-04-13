const express = require("express");
const cors = require("cors");

const app = express();

// ✅ Middleware
app.use(cors());
app.use(express.json());

// ✅ Test route (VERY IMPORTANT)
app.get("/", (req, res) => {
  res.send("Backend is running");
});

// ✅ Save message route
app.post("/save-message", (req, res) => {
  console.log("Received data:", req.body);

  res.json({ success: true });
});

// ✅ Start server
app.listen(5000, () => {
  console.log("Server running on port 5000");
});