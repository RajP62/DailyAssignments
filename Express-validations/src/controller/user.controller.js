const express = require("express");
const router = express.Router();
const {body, validationResult} = require("express-validator");
const User = require("../model/user.model");

router.post("",
body("first_name").notEmpty(),
body("last_name").notEmpty(),
body("email").isEmail(),
body("pincode").custom(value=>{
    const reg = /^[1-9][0-9]{5}$/
    if(typeof(value)!=="number"){
        throw new Error("Pincode should be in numeric format");
    }
    if(!reg.test(value)){
        throw new Error("Pincode should be of 6 digits");
    }
    return true;
}),
body("age").custom(value=>{
    if(value<1 || value>100 || !(typeof(value)==="number")){
        throw new Error("Age should be between 1 to 100");
    }
    return true;
}),
body("gender").custom(value=>{
    if(value!="male" && value!="female" && value!="others"){
        throw new Error("Select gender between male, female and others");
    }
    return true;
}),
async(req, res)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        let newErrors = errors.array().map(({msg, param, location})=>{
            return {
                [param]:msg,
            }
        });
        console.log(errors)
        res.send(newErrors);
    }
    else{

    try{
        const operation = await User.create({
            first_name:req.body.first_name,
            last_name:req.body.last_name,
            email:req.body.email,
            pincode:req.body.pincode,
            age:req.body.age,
            gender:req.body.gender,
        });
        res.send(operation);
    }
    catch(e){
        res.status(500).send(e);
    }
    
    }
});


module.exports = router;
