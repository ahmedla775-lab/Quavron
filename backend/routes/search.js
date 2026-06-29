const express = require("express");

const router = express.Router();

/* ========================================
Search
======================================== */

router.get("/", (req, res) => {

const query = req.query.q;

res.json({
success: true,
query
});

});

module.exports = router;
