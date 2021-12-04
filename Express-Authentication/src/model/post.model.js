const {Schema, model} = require('mongoose');

const postSchema = new Schema({
    title: {type:String, required: true},
    body: {type:String, requierd:true},
    user: {type:Schema.Types.ObjectId,ref:"user", required:true}
});

module.exports = model("post", postSchema);