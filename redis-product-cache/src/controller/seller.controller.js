const express = require("express");

const router = express.Router();

const Seller = require("../model/seller.model");

router.get("/", async(req,res)=>{
    try {
        const operation = await Seller.find({}).lean().exec();
        res.send(operation);
    } catch (e) {
        res.status(500).json({message:"Internal server error"});
    }
});

router.post("/", async(req,res)=>{
    console.log("post request seller");
    try {
        const operation = await Seller.create(req.body);
        res.send(operation);
    } catch (e) {
        res.status(500).json({message:"Internal server error"});
    }
})

module.exports = router;