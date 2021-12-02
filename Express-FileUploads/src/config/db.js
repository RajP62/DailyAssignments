const mongoose = require("mongoose");

module.exports = async ()=>{
    return await mongoose.connect("mongodb://127.0.0.1:27017/File-Upload");
}