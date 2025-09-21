const express = require("express");
const app = express();

app.use(express.json());

// test root
app.get("/", (req, res) => {
  res.send("✅ Hello from EC2 Booking Test Server!");
});

// dummy days
app.get("/days", (req, res) => {
  res.json({
    availableDays: ["2025-10-01", "2025-10-02", "2025-10-03"]
  });
});

// dummy timeslots
app.get("/timeslots", (req, res) => {
  res.json({
    timeslots: ["09:00 AM", "11:00 AM", "03:00 PM", "05:00 PM"]
  });
});

// dummy booking post
app.post("/book", (req, res) => {
  const { name, date, time } = req.body;
  res.json({
    status: "success",
    message: `Booking confirmed for ${name} on ${date} at ${time}`
  });
});

// listen
app.listen(8080, "0.0.0.0", () => {
  console.log("🚀 Booking Test App running on port 8080");
});
