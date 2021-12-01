const mongoose = require('mongoose');

module.exports = async()=>{
    return await mongoose.connect("mongodb+srv://raj4151999:raj4151999@cluster0.myaaa.mongodb.net/Express-mvc");
}