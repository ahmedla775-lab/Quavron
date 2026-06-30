const express = require("express");

const router = express.Router();

/* ========================================
TEMP USERS DATABASE
======================================== */

let users = [];

/* ========================================
REGISTER
======================================== */

router.post("/register", (req, res) => {

const {

fullName,

email,

password

} = req.body;

/* VALIDATION */

if (
!fullName ||
!email ||
!password
) {

return res.status(400).json({

  success: false,

  message: "All fields are required"

});

}

/* CHECK EXISTING USER */

const existingUser = users.find(
user => user.email === email
);

if (existingUser) {

return res.status(400).json({

  success: false,

  message: "User already exists"

});

}

/* CREATE USER */

const newUser = {

id: Date.now(),

fullName,

email,

password

};

users.push(newUser);

res.json({

success: true,

message: "Account created successfully",

user: {

  id: newUser.id,

  fullName: newUser.fullName,

  email: newUser.email

}

});

});

/* ========================================
LOGIN
======================================== */

router.post("/login", (req, res) => {

const {

email,

password

} = req.body;

/* VALIDATION */

if (
!email ||
!password
) {

return res.status(400).json({

  success: false,

  message: "Email and password required"

});

}

/* FIND USER */

const user = users.find(
user =>
user.email === email &&
user.password === password
);

if (!user) {

return res.status(401).json({

  success: false,

  message: "Invalid credentials"

});

}

res.json({

success: true,

message: "Login successful",

user: {

  id: user.id,

  fullName: user.fullName,

  email: user.email

}

});

});

/* ========================================
GET ALL USERS
======================================== */

router.get("/users", (req, res) => {

res.json({

success: true,

total: users.length,

users

});

});

/* ========================================
LOGOUT
======================================== */

router.post("/logout", (req, res) => {

res.json({

success: true,

message: "Logout successful"

});

});

/* ========================================
EXPORT
======================================== */

module.exports = router;
