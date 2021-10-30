const express = require("express");
const router = express.Router();
const seedDb = require("../seedDb");

router.post("/", (req, res) => {
  seedDb();
  res.send("Seeded database with default data.");
});

module.exports = router;
