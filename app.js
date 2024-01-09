const express = require("express");
const path = require("path");
const db = require("./database")

const app=express();

app.get("/", function(request,response){
const filepath = path.join(__dirname,"data" , "index.html");
response.sendFile(filepath);
});

app.post("/submit", function(request,response){
    const username = request.body.username;

})

app.listen(3000) ;
