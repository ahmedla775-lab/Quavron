const express = require("express");

const router = express.Router();

/* ========================================
Get Settings
======================================== */

router.get("/", (req, res) => {

res.json({
success: true,
settings: {}
});

});

module.exports = router;
