const jwt = require("jsonwebtoken");
require("dotenv").config();
const verifyToken = (token)=>{
    return jwt.verify(token, process.env.JWT_TOKEN_KEY);
}
module.exports = (req,res,next)=>{
        const bearerToken = req?.headers?.authorization;
    
        if(!bearerToken || !bearerToken.startsWith("Bearer ")) return res.status(400).json({status:"failed",message:"Please provide a valid token"});

        const token = bearerToken.split(" ")[1];

        const user = verifyToken(token);

        if(!user){
            return res.status(500).json({status:"Failed", message:"User doesn't exist with given bearer token"});
        }

        req.user = user;

        return next();
}