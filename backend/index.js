let mongoose = require('mongoose');
let express = require("express");
let app = express();let axios = require('axios');
const fetch = require('node-fetch');

require('./db');
let news = require('./schema_model');
let cors = require("cors");



app.use(express.json())
app.use(cors());


app.get("/",async (req,res)=>{
    let data = await news.find();
    res.send(data)
})

app.post("/register",async (req,res)=>{
    let data = new news(req.body);
    let result = await data.save();
    result = result.toObject();
    delete result.password;
   
    res.send(result)
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

app.get('/search/:search',async(req,res)=>{
    const search=req.params.search
    //console.log(req.body.search)
    fetch(`http://newsapi.org/v2/everything?q=${search}&apiKey=c4949b254b524ce89db94f5c1dd7591e`)

    .then(res => res.text())
    .then(text => res.send(text));




})



app.listen(5000);