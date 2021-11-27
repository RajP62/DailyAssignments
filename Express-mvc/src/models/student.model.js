const mongoose = require("mongoose");

const studentSchema = mongoose.Schema({
    roll_id: {type:Number, required: true},
    current_batch: {type:String, required: true},
    details: {type:mongoose.Schema.Types.ObjectId, ref:"user",required: true}
});

module.exports = mongoose.model("student",studentSchema);