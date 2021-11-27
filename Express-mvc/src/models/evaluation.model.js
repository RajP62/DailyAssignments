const mongoose = require("mongoose");

const evalSchema = mongoose.Schema({
    dateofeval: {type:String, required: true},
    instructor: {type: mongoose.Schema.Types.ObjectId, ref:"user", required: true},
    topic_name: {type: mongoose.Schema.Types.ObjectId, ref:"topic",required:true},
    students:[{details:{type:mongoose.Schema.Types.ObjectId, ref:"student", required:true},marks:{type:Number,required:true}}]
});

module.exports = mongoose.model("evaluation", evalSchema);