const express = require("express");

const cors = require("cors");

const morgan = require("morgan");

require("dotenv").config();

const authRoutes =
require("./routes/auth");

/* ========================================
APP
======================================== */

const app = express();

/* ========================================
MIDDLEWARE
======================================== */

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({

extended: true

}));

app.use(morgan("dev"));

/* ========================================
ROOT
======================================== */

app.get("/", (req, res) => {

res.json({

success: true,

message: "Quavron Running 🚀"

});

});

/* ========================================
ROUTES
======================================== */

app.use(

"/api/auth",

authRoutes

);

/* ========================================
PORT
======================================== */

const PORT =
process.env.PORT || 3000;

/* ========================================
START SERVER
======================================== */

app.listen(PORT, () => {

console.log(

`🚀 Server running on ${PORT}`

);

});
