const express = require('express');
const app = express();
app.use(express.json());
const User = require("./models/user.model");
const Student = require("./models/student.model");
const Topic = require("./models/topic.model");
// post requests for user student evaluation and topic are not used in this file as i inserted data using mongodbcompass but these are just to aware that i have created schemas for all of them

const usersController = require("./controllers/evaluation.controller");

app.use("/evaluation", usersController);

module.exports = app;
