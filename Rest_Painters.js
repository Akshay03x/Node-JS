const mongoose =require('mongoose')
const Painter=require('./model/Painter')
const express =require('express')
const bodyParser=require('body-parser')
const url='mongodb+srv://Akshay03x:Akshay03x@cluster0.kltd5zl.mongodb.net/Painters?retryWrites=true&w=majority'
mongoose.connect(url).then(()=>{
    const app=express();
    app.use(bodyParser.urlencoded({ extended: false }))

    app.get('/',async(req,res)=>{
        const data=await Painter.find()
        res.send(data)
    })
    

    app.get('/:id',async(req,res)=>{
        const data=await Painter.findOne({id:req.params.id})
        res.send(data)
    })

    app.delete('/:id',async(req,res)=>{
        const data=await Painter.deleteOne({id:req.params.id})
        res.send(data)
    })

    app.post('/',async(req,res)=>{
        const data=new Painter();

        data.id=req.body.id
        data.name=req.body.name
        const dat=await data.save()
        res.send(dat)
    })

    app.put('/:id',async(req,res)=>{
        const data=await Painter.findOne({id:req.params.id})

        data.id=req.body.id;
        data.name=req.body.name;
        await data.save()
        res.send(data);
    })
    app.listen(8888,()=>{
        console.log("started")
    })
})
