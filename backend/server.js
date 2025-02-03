const express = require("express");
const cors = require("cors");
require("dotenv").config(); // Load environment variables
const app = express();

// Middleware-------------------------
app.use(cors()); // Solve CORS issues
app.use(express.json()); // Parse JSON data

// Test Route-------------------------
app.get("/", (req, res) => {
    res.send("Task Manager API Running");
});

// Start Server-----------------------
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});