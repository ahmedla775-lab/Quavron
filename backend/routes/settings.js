const express = require("express");

const router = express.Router();

/* ========================================
TEMP SETTINGS STORAGE
======================================== */

let settings = {

theme: "dark",

language: "en",

fontSize: 16,

autoSave: true,

notifications: true,

terminal: true,

aiAssistant: true

};

/* ========================================
GET SETTINGS
======================================== */

router.get("/", (req, res) => {

res.json({

success: true,

settings

});

});

/* ========================================
UPDATE SETTINGS
======================================== */

router.put("/", (req, res) => {

settings = {

...settings,

...req.body

};

res.json({

success: true,

message: "Settings updated successfully",

settings

});

});

/* ========================================
RESET SETTINGS
======================================== */

router.post("/reset", (req, res) => {

settings = {

theme: "dark",

language: "en",

fontSize: 16,

autoSave: true,

notifications: true,

terminal: true,

aiAssistant: true

};

res.json({

success: true,

message: "Settings reset successfully",

settings

});

});

/* ========================================
TOGGLE THEME
======================================== */

router.post("/theme", (req, res) => {

settings.theme =
settings.theme === "dark"
? "light"
: "dark";

res.json({

success: true,

theme: settings.theme

});

});

/* ========================================
TOGGLE AUTO SAVE
======================================== */

router.post("/autosave", (req, res) => {

settings.autoSave =
!settings.autoSave;

res.json({

success: true,

autoSave: settings.autoSave

});

});

/* ========================================
EXPORT
======================================== */

module.exports = router;
