const express = require("express");
const cors = require("cors");
const XLSX = require("xlsx");
const fs = require("fs");

const app = express();

// ✅ Middleware
app.use(cors());
app.use(express.json());

// ✅ Excel file path
const FILE_PATH = "messages.xlsx";

// ✅ Create Excel file if it doesn't exist
if (!fs.existsSync(FILE_PATH)) {
  const ws = XLSX.utils.json_to_sheet([]);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "Messages");
  XLSX.writeFile(wb, FILE_PATH);
  console.log("Excel file created: messages.xlsx");
}

// ✅ Test route
app.get("/", (req, res) => {
  res.send("Backend is running with Excel storage");
});

// ✅ Save message route (MAIN LOGIC)
app.post("/save-message", (req, res) => {
  const { name, email, message } = req.body;

  // Basic validation
  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: "All fields required" });
  }

  try {
    // 📥 Read existing Excel file
    const workbook = XLSX.readFile(FILE_PATH);
    const sheet = workbook.Sheets["Messages"];

    const data = XLSX.utils.sheet_to_json(sheet);

    // ➕ Add new row
    data.push({
      Name: name,
      Email: email,
      Message: message,
      Date: new Date().toLocaleString(),
    });

    // 🔄 Convert back to sheet
    const newSheet = XLSX.utils.json_to_sheet(data);
    workbook.Sheets["Messages"] = newSheet;

    // 💾 Save file
    XLSX.writeFile(workbook, FILE_PATH);

    console.log("Saved:", req.body);

    res.json({ success: true });
  } catch (error) {
    console.error("Error saving to Excel:", error);
    res.status(500).json({ success: false });
  }
});

// ✅ Start server
app.listen(5000, () => {
  console.log("🚀 Server running on http://localhost:5000");
});