const express = require('express');
const mongoose = require('mongoose');
const router = require("./router/userRoute")

const app=express();
app.use(express.json());

app.use('/api',router);
const Brouter = require("./router/blogRoute")

app.use('/api/blogs',Brouter);

mongoose.connect("mongodb+srv://Admin:pass123@cluster0.xe9efzu.mongodb.net/Blog_App?retryWrites=true&w=majority",)
.then(()=>{
    app.listen(5000);
    console.log("connected");
}).catch((e)=>console.log(e));
