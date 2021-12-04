const express = require("express");
const router = express.Router();
const Post = require('../model/post.model');
const authenticate = require("../middleware/authenticate");

router.get("",authenticate, async(req,res)=>{
    try{
        const posts =await Post.find({}).populate("user").lean().exec();

        // const user = req.user;
        res.json({posts});
    }
    catch(e){
        return res.status(500).json({message:"Internal server error"});
    }
});

module.exports = router;