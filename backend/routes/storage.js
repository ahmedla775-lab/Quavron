const express = require("express");

const router = express.Router();

/* ========================================
TEMP STORAGE DATA
======================================== */

let storage = {

totalSpace: "100 GB",

usedSpace: "12 GB",

freeSpace: "88 GB",

files: [

{
  id: 1,
  name: "project.zip",
  size: "24 MB",
  type: "zip"
},

{
  id: 2,
  name: "design.fig",
  size: "12 MB",
  type: "figma"
}

]

};

/* ========================================
GET STORAGE INFO
======================================== */

router.get("/", (req, res) => {

res.json({

success: true,

storage

});

});

/* ========================================
GET ALL FILES
======================================== */

router.get("/files", (req, res) => {

res.json({

success: true,

total: storage.files.length,

files: storage.files

});

});

/* ========================================
UPLOAD FILE
======================================== */

router.post("/upload", (req, res) => {

const {

name,

size,

type

} = req.body;

if (!name) {

return res.status(400).json({

  success: false,

  message: "File name required"

});

}

const newFile = {

id: Date.now(),

name,

size: size || "1 MB",

type: type || "unknown"

};

storage.files.push(newFile);

res.json({

success: true,

message: "File uploaded successfully",

file: newFile

});

});

/* ========================================
DELETE FILE
======================================== */

router.delete("/files/:id", (req, res) => {

const index =
storage.files.findIndex(
file => file.id == req.params.id
);

if (index === -1) {

return res.status(404).json({

  success: false,

  message: "File Not Found"

});

}

const deletedFile =
storage.files.splice(index, 1);

res.json({

success: true,

message: "File deleted successfully",

deletedFile

});

});

/* ========================================
STORAGE ANALYTICS
======================================== */

router.get("/analytics", (req, res) => {

res.json({

success: true,

analytics: {

  totalFiles: storage.files.length,

  usedSpace: storage.usedSpace,

  freeSpace: storage.freeSpace,

  usagePercentage: "12%"

}

});

});

/* ========================================
CLEAR STORAGE
======================================== */

router.delete("/clear", (req, res) => {

storage.files = [];

storage.usedSpace = "0 GB";

storage.freeSpace = "100 GB";

res.json({

success: true,

message: "Storage cleared successfully"

});

});

/* ========================================
EXPORT
======================================== */

module.exports = router;
