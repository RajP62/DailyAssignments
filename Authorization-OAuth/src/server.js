const app = require("./index");
const dbConnect = require('./config/db');

app.listen(2000, async()=>{
    await dbConnect();
    console.log("Server is running on port 2000");
});
