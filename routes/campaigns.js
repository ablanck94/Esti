const express = require("express");
const router = express.Router();

// Example Route
router.get("/", (req, res) => {
    res.send("Campaigns API is working!");
});

module.exports = router;
