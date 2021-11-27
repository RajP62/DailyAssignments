const express = require("express");
const router = express.Router();

const Evaluation = require("../models/evaluation.model");

router.get('/students', async(req,res)=>{
    try{
        const student  = await Evaluation.find({},{students:1}).populate({path:"students",populate:{path:"details",populate:"details"}}).lean().exec();
        res.send(student);
    }
    catch(e){
        res.status(500).send(e);
    }
});

router.get('/highestScorer',async(req,res)=>{
    try{
        const evalRes = await Evaluation.find({},{students:1}).populate({path:"students",populate:{path:"details",populate:"details"}}).limit(1).lean().exec();
        let winner = {};
        let high = -Infinity;
        const highest = evalRes.forEach(element => {
            element.students.forEach(elem=>{
                if(elem.marks>high){
                    winner = elem;
                    high = elem.marks;
                }
            })
        });
        res.send(winner);
    }
    catch(e){
        res.status(500).send(e);
    }
});

module.exports = router;
