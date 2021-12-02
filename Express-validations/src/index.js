const express = require("express");
const app = express();
app.use(express.json());
const userCont = require('./controller/user.controller');

app.use("/users", userCont);

module.exports = app;