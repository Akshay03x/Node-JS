const express=require('express');

const mongoose=require('mongoose');
const Faculty=require('./model/Faculty');
const bodyParser=require('body-parser');
const cors=require('cors')

mongoose.connect('mongodb+srv://Akshay03x:Akshay03x@cluster0.kltd5zl.mongodb.net/collages?retryWrites=true&w=majority')
.then(()=>{
    const app=express();
    app.use(cors());
    app.use(bodyParser.urlencoded({ extended: false }))

    app.get('/', (req,res)=>{
        res.send("hello from Faculty");
    })

    app.get('/Faculty',async (req,res)=>{
        const data=await Faculty.find();
        res.send(data);
    })
    app.get('/Faculty/:id',async(req,res)=>{
        const data =await Faculty.findOne({FacultyId:req.params.id});
        res.send(data);
    })

    app.post('/Faculty',async (req,res)=>{
        const fac=new Faculty();
        fac.FacultyName=req.body.FacultyName;
        fac.FacultyAge=req.body.FacultyAge;
        fac.FacultyId=req.body.FacultyId;
        const data= await fac.save()
        res.send(data);
    })


    app.put('/Faculty/:id',async (req, res)=>{
        const data = await Faculty.findOne({FacultyId:req.params.id});
        data.FacultyName = req.body.FacultyName;
        data.FacultyAge = req.body.FacultyAge;
        await data.save();
        res.send(data);
    })
    app.delete('/Faculty/:id',async(req,res)=>{
        const data=await Faculty.deleteOne({FacultyId:req.params.id})
        res.send(data);
        })
    app.listen(3033,()=>{
        console.log("started at 3033");
    })
})

