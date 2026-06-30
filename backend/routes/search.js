const express = require("express");

const router = express.Router();

/* ========================================
TEMP DATA
======================================== */

const projects = [

"Quavron IDE",

"Portfolio Website",

"SaaS Dashboard",

"AI Assistant"

];

const files = [

"index.html",

"style.css",

"app.js",

"server.js"

];

const users = [

"ALGERIEN",

"Developer",

"Admin"

];

/* ========================================
GLOBAL SEARCH
======================================== */

router.get("/", (req, res) => {

const query =
req.query.q?.toLowerCase() || "";

/* SEARCH PROJECTS */

const matchedProjects =
projects.filter(project =>
project.toLowerCase().includes(query)
);

/* SEARCH FILES */

const matchedFiles =
files.filter(file =>
file.toLowerCase().includes(query)
);

/* SEARCH USERS */

const matchedUsers =
users.filter(user =>
user.toLowerCase().includes(query)
);

res.json({

success: true,

query,

results: {

  projects: matchedProjects,

  files: matchedFiles,

  users: matchedUsers

}

});

});

/* ========================================
PROJECT SEARCH
======================================== */

router.get("/projects", (req, res) => {

const query =
req.query.q?.toLowerCase() || "";

const results =
projects.filter(project =>
project.toLowerCase().includes(query)
);

res.json({

success: true,

total: results.length,

results

});

});

/* ========================================
FILE SEARCH
======================================== */

router.get("/files", (req, res) => {

const query =
req.query.q?.toLowerCase() || "";

const results =
files.filter(file =>
file.toLowerCase().includes(query)
);

res.json({

success: true,

total: results.length,

results

});

});

/* ========================================
USER SEARCH
======================================== */

router.get("/users", (req, res) => {

const query =
req.query.q?.toLowerCase() || "";

const results =
users.filter(user =>
user.toLowerCase().includes(query)
);

res.json({

success: true,

total: results.length,

results

});

});

/* ========================================
COMMAND PALETTE
======================================== */

router.get("/commands", (req, res) => {

const commands = [

"Create Project",

"Open File",

"Deploy Project",

"Run Terminal",

"AI Generate",

"Settings",

"Extensions"

];

res.json({

success: true,

total: commands.length,

commands

});

});

/* ========================================
EXPORT
======================================== */

module.exports = router;
