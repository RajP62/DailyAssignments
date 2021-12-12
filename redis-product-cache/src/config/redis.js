const {createClient} = require("redis");

const client = createClient();
client.on('error', function(error){
    console.log(error);
});

module.exports = client;