const mongoose=require('mongoose');
const express=require('express');
const AirPod=require('./model/AirPod');
const bodyParser=require('body-parser');
mongoose.connect('mongodb+srv://Akshay03x:Akshay03x@cluster0.kltd5zl.mongodb.net/AirPods?retryWrites=true&w=majority')
.then(()=>{
    const app=express();
    app.use(bodyParser.urlencoded({ extended: false }))

    app.get('/', (req,res)=>{
        res.send('hello');
    })

        app.get('/AirPod',async (req,res)=>{
        const data=await AirPod.find();
        res.send(data);
        } )

        app.get('/AirPod/:id',async (req,res)=>{
            const data=await AirPod.findOne({id:req.params.id})
            res.send (data);
        })

        app.post('/AirPod',async (req,res)=>{
            const A=new AirPod();
            A.id=req.body.id;
            A.AirPodName=req.body.AirPodName;
            A.Price=req.body.Price;

            const data=await A.save();
            res.send(data);
        })

        app.put('/AirPod/:id',async (req,res)=>{
            const data=await AirPod.findOne({id:req.params.id});
            data.AirPodName=req.body.AirPodName;
            data.id=req.body.id;
            data.Price=req.body.Price;

            await data.save();
            res.send(data);
        })

        app.delete('/AirPod/:id',async (req,res)=>{
            const data =await AirPod.deleteOne({id:req.params.id});
            res.send(data);
        })

        app.listen(2222,()=>{
            console.log('server Started At 2222');
        })
})