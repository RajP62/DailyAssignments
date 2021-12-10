const mongoose = require('mongoose');
require("dotenv").config();

module.exports = async()=>{
    return await mongoose.connect(process.env.MONGODB_CLUSTOR);
}