const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    first_name: {type: String, required: true},
    last_name: {type:String, required: true},
    profile_pic: {type: String, require: true}
});

module.exports = mongoose.model("user",userSchema);