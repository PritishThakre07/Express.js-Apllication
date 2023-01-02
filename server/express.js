const express = require("express");
const path = require("path");
const app = express();

app.get("/",(req,resp)=>
{
    resp.sendFile(path.join(__dirname,"./Studentlogin.html"));
})

app.listen(3000,()=>
{
    console.log("server running ");
})