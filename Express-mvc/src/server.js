const app = require("./index");

const dbConnect =  require("./configs/db");

app.listen(2000, async()=>{
    await dbConnect();
    console.log("listening on port 2000");
})