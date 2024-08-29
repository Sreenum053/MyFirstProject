const express = require("express");
const app = express();

app.post("/user", (req, res)=>{
    console.log("Hello World!!");
})

app.listen(3000, ()=> console.log("Project running port 3000"));

