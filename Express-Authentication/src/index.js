const express = require("express");
const app = express();
const {body,validationResult} = require("express-validator");
const postController = require("./controller/post.controller");

const {register,login} = require("./controller/auth.controller");
app.use(express.json());
app.use("/register",body("name").notEmpty(),
body("email").isEmail().withMessage("Please enter an valid email"),
body("password").isLength({min:4,max:20}).withMessage("Password should be minimum 4 characters and maximum of 20 characters")
,register);

app.use("/login",body("email").isEmail().withMessage("Please enter an valid email"),

body("password").isLength({min:4, max:20}),
login);

app.use("/posts", postController); 
module.exports = {app,validationResult};