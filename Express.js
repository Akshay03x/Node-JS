const express=require('express');
var app = express();

// app.get('/',(req, res)=>{
//     res.setHeader('Content-Type', 'text/html');
//     res.send("<h1>hello world</h1>")
// })
// app.get('/About',(req, res)=>{
//     res.setHeader('Content-Type', 'text/html');
//     res.send("<h1>About</h1>")
// })
// app.get('/Contact',(req, res)=>{
//     res.setHeader('Content-Type', 'text/html');
//     res.send("<h1>Contact</h1>");
// })


// app.get('/',(req,res,next)=>{
//     // res.send("hello 123");
//     console.log(res.body);
//     next();
// })
// app.get('/',(req,res)=>{
//     res.send("About 1234");
// })


app.get('/',(req,res)=>{
    res.send("hello");
})
app.get('/ab?c',(req,res)=>{
    res.send('hello 123');
})

app.get('/*fly$/',(req,res)=>{
    res.send('you can fly!!!!!!!!!!!!!!');
})

app.get('/user/:userid/book/:bookid',(req,res)=>{
        res.send("hello 123 from book");
})


app.listen(3000,()=>{
    console.log('Started');
})   
