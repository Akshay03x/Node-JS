const mongoose = require('mongoose');
const express = require('express');
const Student=require('./model/Student');
const bodyParser = require('body-parser')
mongoose.connect('mongodb+srv://Akshay03x:Akshay03x@cluster0.kltd5zl.mongodb.net/Students?retryWrites=true&w=majority')
.then(()=>{
    const app=express();
    app.use(bodyParser.urlencoded({ extended: false }))

    app.get('/', (req,res)=>{
        res.send('hello');
    })

    app.get('/Student',async (req,res)=>{
        const data= await Student.find();
        res.send(data);
    })

    app.get('/Student/:id',async (req,res)=>{
        const data= await Student.findOne({id:req.params.id});
        res.send(data);
    })

    app.post('/Student',async (req,res)=>{
        const S=new Student();
        S.id=req.body.id;
        S.StudentName=req.body.StudentName;
        S.StudentEmail=req.body.StudentEmail;
        S.StudentMobile=req.body.StudentMobile;
        S.StudentParentMobile=req.body.StudentParentMobile;
        S.StudentImage=req.body.StudentImage;
        S.StudentDepartment=req.body.StudentDepartment;

        const data=await S.save();
        res.send(data);
    })

    app.put('/Student/:id',async (req,res)=>{
        const data=await Student.findOne({id:req.params.id});

        data.id=req.body.id;
        data.StudentName=req.body.StudentName;
        data.StudentEmail=req.body.StudentEmail;
        data.StudentMobile=req.body.StudentMobile;
        data.StudentParentMobile=req.body.StudentParentMobile;
        data.StudentImage=req.body.StudentImage;
        data.StudentDepartment=req.body.StudentDepartment;

        await data.save();
        res.send(data);
    })

    app.delete('/Student/:id',async (req,res)=>{
        const data =await Student.deleteOne({id:req.params.id});
        res.send(data);
    })

    app.listen(9090,()=>{
        console.log('Started At 9090');
    })
})