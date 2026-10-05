const express = require("express");
const router = express.Router();

// Test appointment route
router.get("/", (req, res) => {
  res.json({ message: "Appointment routes working" });
});

module.exports = router;
