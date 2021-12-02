const express = require("express");
const router = express.Router();
const User = require("../model/user.model");
const upload = require("../middlewares/upload");
const fs = require("fs");



router.patch("/:type/update/:userId",upload.single("profile_pic"),async(req,res)=>{
    try{
        if(req.file.path){
            const oldObj = await User.findById(req.params.userId).lean().exec();
            const oldPicPath = oldObj.profile_pic;
            fs.unlinkSync(oldPicPath);
            await User.findByIdAndUpdate(req.params.userId,{$set:{profile_pic:req.file.path}},{new:true});
        }
        if(req.body.first_name){
            await User.findByIdAndUpdate(req.params.userId,{$set:{first_name:req.body.first_name}},{new:true});
        }
        if(req.body.last_name){
            await User.findByIdAndUpdate(req.params.userId,{$set:{last_name:req.body.last_name}},{new:true});
        }
        res.send(await User.findById(req.params.userId).lean().exec());
    }
    catch(e){
        res.status(500).send(e);
    }
});

router.delete("/:type/delete/:userId",upload.single("profile_pic"), async(req, res)=>{
    try{
        const operation = await User.findByIdAndDelete(req.params.userId).lean().exec();
        const path = operation.profile_pic;
        fs.unlinkSync(path);
        res.send(operation);
    }
    catch(e){
        res.status(500).send(e);
    }
})

router.post("/:type",upload.single("profile_pic"), async(req, res)=>{
    try{
        const operation = await User.create({
            first_name: req.body.first_name,
            last_name:req.body.last_name,
            profile_pic: req.file.path
        });
        res.send(operation);
    }
    catch(e){
        res.status(500).send(e);
    }
});

module.exports = router;

