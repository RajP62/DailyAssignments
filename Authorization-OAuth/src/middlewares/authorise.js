const Product = require("../model/product.model");

module.exports = function(permittedRoles){
    return async function(req,res,next){
        try{
        let [{_id:id,roles}] = req.user.user;
        const {seller:{_id}} = await Product.findById(req.params.id).lean().exec();
        let isAllow = false;
        console.log(_id)

        if(_id.equals(id)){
            console.log("enteredEqualId");
            isAllow = true;
        }
        console.log(`new ObjectId("${id}")`==""+_id)
        console.log(`new ObjectId("${id}")`, "product seller", _id);
        if(roles.includes("admin")){
            console.log("enteredAdmin")
            isAllow = true;
        }

        if(!isAllow){
            console.log("entered isAllow false");
            return res.status(401).json({message:"Your account is limited from this feature"});
        }

        return next();

        }
        catch(e){
            res.status(500).json({message: e});
        }
    }
}