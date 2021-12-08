const express = require("express");

const router = express.Router();

const Product = require("../model/product.model");

const authorise = require("../middlewares/authorise");

const {authenticate} = require("../middlewares/authenticate");

router.post("/", async(req,res)=>{
    try{
        const operation = await Product.create(req.body);
        res.send(operation);
    }

    catch(e){
        res.status(500).json({message: e.message});
    }
});

router.get("/", async(req,res)=>{
    try{
        const users = await Product.find().populate("seller").lean().exec();
        res.send(users);
    }
    catch(e){
        res.status(500).json({message: e.message})
    }
})


router.delete("/delete/:id",authenticate, authorise(["seller","admin"]), async(req,res)=>{
    try{
        const operation = await Product.findByIdAndRemove(req.params.id);
        res.send(operation);
    }
    catch(e){
        res.status(500).json({message: e.message})
    }
});

router.patch("/update/:id",authenticate, authorise(["seller","admin"]), async(req,res)=>{
    try{
        const operation = await Product.findByIdAndUpdate(req.params.id,req.body,{new:true});
        res.send(operation);
    }
    catch(e){
        res.status(500).json({message: e.message})
    }
});
module.exports = router;