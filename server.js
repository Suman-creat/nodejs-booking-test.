const express = require("express");
const app = express();

// Root route
app.get("/", (req, res) => {
  res.send("✅ Hello World! Your EC2 Node.js server is working.");
});

// Listen on port 8080 for all interfaces
app.listen(8080, "0.0.0.0", () => {
  console.log("🚀 Server is running on port 8080");
});
