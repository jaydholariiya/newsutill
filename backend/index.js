let mongoose = require('mongoose');
let express = require("express");
let app = express();
require('./db');
let news = require('./schema_model');
let cors = require("cors");
app.use(cors);


app.use(express.json())


app.get("/" , async(req,res)=>{
    let data = await news.find({});
    res.send(data);
})

app.post("/register",async(req,res)=>{
    let data = new news(req.body);
    let result = await data.save();
    result = result.toObject();
    delete result.password;
    res.send(result);
})

app.post("/login",async(req,res)=> {
    let data = await news.findOne(req.body).select("-password");
    if(req.body.password && req.body.email){
        res.send(data)
    }
    else{
        res.send("User Not Found")
    }
})


app.listen(4000);