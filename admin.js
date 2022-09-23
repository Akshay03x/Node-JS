const express=require('express');
const router=express.Router();

router.use('/user/:id',(req,res,next)=>{
    // res.send('hello from user');
    console.log('orignalUrl:'+req.originalUrl);
    // console.log('hello from /');
    next();
}

)

router.get('/user/:id',(req,res)=>{
    res.send(req.params);
})

module.exports=router;
