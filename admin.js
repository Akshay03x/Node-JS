const express=require('express');

const app=express();


app.get('/hello',(req,res)=>{
    res.send("hello");
} )
app.get('/admin',(req,res)=>{
    res.send("admin");
} )

module.exports.app =app