const express = require('express');
const app = express();
const users = require('./users.json');

app.get('/get/',(req,res)=>{
    console.log("Got an simple get request")
    return res.send("Welcome to Home Page");
});

app.get('/get/users',(req,res)=>{
    console.log("Got an get/users request")
    return res.send(users);
});

app.listen(2000,()=>{
    console.log("Server is running on port 2000");
})
