const User = require("../model/user.model");
const jwt = require("jsonwebtoken");
require(`dotenv`).config();
const {validationResult} = require("express-validator");

function genToken(user){
    return jwt.sign({user:user}, process.env.JWT_TOKEN_KEY);
}

const register = async (req, res)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        let newErrors = errors.array().map(({msg,param})=>{
            return {
                [param]:msg
            }
        });
        return res.send(newErrors);
    }
    try{
        const user = await User.findOne({email:req.body.email});
    
        if(user){
            return res.status(400).json({status:"failed",message:"Email already exists"});
        }

         let newuser = await User.create(req.body);
        const token = genToken(newuser);
        return res.json({newuser,token});

    }
    catch(e){
        res.status(500).json({message:"Internal server error"});
    }
}

const login = async(req,res)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        const newErrors = errors.array().map(({msg,param})=>{
            return {
                [param]:msg
            }
        });
        return res.send(newErrors);
    }
    try{
        const user = await User.findOne({email:req.body.email});
        if(!user){
            return res.status(400).json({message:"Error in the code"});
        }
        const match = await user.checkPassword(req.body.password);

        if(!match){
            return res.status(400).json({message:"Invalid credentials"});
        }

        const token = genToken(user);

        res.status(500).json({user, token});
    }
    catch(e){
        return res.status(500).json({message:"Internal server error"});
    }
}


module.exports = {register,login, genToken};