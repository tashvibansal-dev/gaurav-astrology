const express = require("express");
const router = express.Router();

// TEST route
router.get("/test", (req, res) => {
  res.json({ message: "Auth routes working" });
});

// (existing login/register routes below)

module.exports = router;

