const {Schema, model} = require("mongoose");

const sellerSchema = Schema({
    name: {type:String, required:true},
    lastName: {type:String, required:true},
    address: {type:String, required:true},
    phone: {type:Number, required:true}
});

module.exports = model("seller", sellerSchema);