const {connect} = require("mongoose");

module.exports = async ()=>{
    return await connect("mongodb://127.0.0.1:27017/Authorization-OAuth");
}