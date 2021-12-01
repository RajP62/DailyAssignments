const express = require("express");
const router = express.Router();
const User = require('../model/user.model');
const sendMail = require("../util/sendmail");
// const Admin = require("../model/admin.model");

router.get("",async(req, res)=>{
    try{
        const page = +req.query.page || 1;
        const size = +req.query.size || 10;
        const skip = (page-1)*size;
        const allUsers = await User.find().skip(skip).limit(size).lean().exec();
        const totalPages = Math.ceil(await User.find().countDocuments()/size);
        res.json({allUsers,totalPages});
    }
    catch(e){
        res.status(500).send(e);
    }
});

router.post("/register",async(req,res)=>{
    try{
        const update = await User.create(req.body);
        sendMail("a@a.com",
        req.body.email,
        `Welcome to ABC system ${req.body.first_name} ${req.body.last_name}`,
        `Hii ${req.body.first_name}, Please confirm your email address`,
        "<h1>Please confirm your email address</h1>");

        const adminsMail = [
            "rajP@gmail.com",
            "founderslife@gmail.com",
            "dhavalNComp@gmail.com",
            "Msi@gmail.com",
            "Ec@masai.com"
        ];
        
        sendMail("a@a.com",adminsMail,`${req.body.first_name} ${req.body.last_name} has registered with us`,`Please welcome ${req.body.first_name} ${req.body.last_name}`, `<h1>New user registered</h1>`);
        // (await Admin.find()).forEach((el)=>{
        //     sendMail("a@a.com",
        //     el.email,
        //     `${req.body.first_name} ${req.body.last_name} has registered with us`,`Please welcome ${req.body.first_name} ${req.body.last_name}`,`<h1>New user registered</h1>`);
        // });
        res.send(update);
    }
    catch(e){
        res.status(500).send(e);
    }
});

module.exports = router;