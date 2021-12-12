const express = require("express");
const router = express.Router();
const Product = require("../model/product.model");
const client = require("../config/redis");

router.get("",async (req,res)=>{
    try{
        const page = +req.query.page || 1;
        const size = +req.query.size || 10;

        const skip = (page-1)*size;
        
        client.get("products", async (err,productsRedis)=>{
            if(err) return res.status(400).json({message:"Bad request found"});
            console.log(productsRedis)
            if(productsRedis && productsRedis!=null){
                console.log("from redis");
                console.log(`page : ${page}, size : ${size}, skip : ${skip}`);
                productsRedis = JSON.parse(productsRedis);
                let part = productsRedis.splice(skip,size);
                return res.send(part);
            }
            const products =await  Product.find({}).skip(skip).limit().lean().exec();
            client.set("products",JSON.stringify(await Product.find({}).lean().exec()));
            return res.send(products);
        });
    }
    catch(e){
        res.status(500).json({message:"Internal server error"});
    }
});

router.get("/normalGet",async(req,res)=>{
    try {
        const products = await Product.find({}).lean().exec();
        res.send(products);
    } catch (e) {
        res.status(500).send({message: "Internal server error"});
    }
})

router.post("", async(req,res)=>{
    try{
            const product =await Product.create(req.body);
            client.set(`products.${product._id}`, JSON.stringify(product));

            const products = await Product.find({}).lean().exec();
            client.set("products",JSON.stringify(products));
            res.send(product);
    }
    catch(e){
        res.status(500).json({message:"Internal server error"});
    }
});

router.get("/:id", async(req,res)=>{
    try{
        client.get(`products.${req.params.id}`, async(err,prod)=>{
            if(err)console.log(err);
            if(prod)return res.send(prod);

            const product = await Product.findById(req.params.id).lean().exec();
            res.send(product);
        });
    }
    catch(e){
        res.status(500).json({message:"Internal server error"});
    }
});

router.patch("/:id", async(req,res)=>{
    try{
        let product =await Product.findByIdAndUpdate(req.params.id,req.body); 
        client.set(`products.${req.params.id}`,JSON.stringify(product));
        
        const products = await Product.find({}).lean().exec();
        
        client.set(`products`,JSON.stringify(products));
        res.send(product);
    }
    catch(e){
        res.status(500).json({message:"Internal server error"});
    }
});

router.delete("/:id", async(req,res)=>{
    try{
        const product = await Product.findByIdAndDelete(req.params.id);
        client.del(`products.${req.params.id}`);
        
        console.log("after")
        const products = await Product.find({}).lean().exec();
        client.set('products',JSON.stringify(products));
        res.send(product);
    }
    catch(e){
        res.status(500).json({message:"Internal server error"});
    }
});

module.exports = router;