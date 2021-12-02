const express = require("express");
const router = express.Router();
const Gallery = require("../model/gallery.model");
const upload = require("../middlewares/upload");
const fs = require("fs");


router.post("/:type",upload.array("pictures",5),async(req,res)=>{
    try{
        const paths = req.files.map((el)=>el.path);
        const operation = await Gallery.create({
            pictures: paths,
            user_id: req.body.user_id
        });
        res.send(operation);
    }
    catch(e){
        res.status(500).send(e);
    }
});

router.delete("/:type/delete/:id",async(req,res)=>{
    try{
        const element = await Gallery.findByIdAndUpdate(req.params.id,{$set:{pictures:[]}});
        console.log(element);
        const exisPath = element.pictures;
        console.log(exisPath);
        exisPath.forEach(path => {
            console.log(path)
            fs.unlinkSync(path);
        });
        res.send(element)
    }
    catch(e){
        res.status(500).send(e);
    }
})
module.exports = router;