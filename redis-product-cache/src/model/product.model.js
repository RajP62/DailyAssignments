const {Schema, model} = require("mongoose");

const productSchema = Schema({
    title: {type:String, required:true},
    category: {type:String, required:true},
    material: {type:String},
    price: {type:Number, required:true},
    seller: {type:Schema.Types.ObjectId, required:true}
});

module.exports = model("product",productSchema);