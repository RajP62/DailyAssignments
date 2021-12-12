const mongoose = require("mongoose");
require("dotenv").config();
module.exports = async ()=>{
    return await mongoose.connect(process.env.MONGO_URL_CLUSTOR);
}