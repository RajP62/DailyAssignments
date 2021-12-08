const {Schema, model} = require("mongoose");

const productSchema = new Schema({
    title: {type:String, required:true},
    category:{type:String, required:true},
    seller: {type:Schema.Types.ObjectId,ref:"user", requied:true}
});

module.exports = new model("product", productSchema);
