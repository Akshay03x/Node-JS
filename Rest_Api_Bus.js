const mongoose = require('mongoose');
const express = require('express')
const Bus=require('./model/Bus');
const bodyParser=require('body-parser');
mongoose.connect('mongodb+srv://Akshay03x:Akshay03x@cluster0.kltd5zl.mongodb.net/Buses?retryWrites=true&w=majority')
.then(()=>{
    const app=express();
    app.use(bodyParser.urlencoded({ extended: false }));  
    app.get('/',(req,res)=>{
        res.send('hello');
    })

    app.get('/Bus',async(req,res)=>{
        const data =await Bus.find();
        res.send(data);
    })

    app.get('/Bus/:id',async (req,res)=>{
        const data=await Bus.findOne({BusNo:req.params.id});
        res.send(data);
    })

    app.post('/Bus',async (req,res)=>{

        const bus=new Bus();
        bus.BusNo=req.body.BusNo;
        bus.BusName=req.body.BusName;
        const data= await bus.save();
        res.send(data);
    })

    app.put('/Bus/:id',async (req,res)=>{
        const data=await Bus.findOne({BusNo:req.params.id});
        data.BusName=req.body.BusName;
        await data.save();
        res.send(data);
    })

    app.delete('/Bus/:id',async (req,res)=>{
        const data =await Bus.deleteOne({BusNo:req.params.id});
        res.send(data);
    } )

    app.listen(3333,()=>{
        console.log("started At 3333");
    })
})