const express = require("express");
const app = express();
app.use(express.json());
const userCont = require("./controller/user.controller");
const galleryCont = require("./controller/gallery.controller");
app.use("/user", userCont);
app.use("/gallery",galleryCont);
module.exports = app;