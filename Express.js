const express=require('express');
var app = express();

app.get('/',(req, res)=>{
    res.setHeader('Content-Type', 'text/html');
    res.send("<h1>hello world</h1>")
})
app.get('/About',(req, res)=>{
    res.setHeader('Content-Type', 'text/html');
    res.send("<h1>About</h1>")
})
app.get('/Contact',(req, res)=>{
    res.setHeader('Content-Type', 'text/html');
    res.send("<h1>Contact</h1>");
})
app.listen(3000,()=>{
    console.log('Started');
})