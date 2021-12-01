const mongoose = require("mongoose");

const topicSchema = mongoose.Schema({
    topic_name:{type:String, required: true}
});

module.exports = mongoose.model("topic", topicSchema);