var http=require('http');

server=http.createServer((req,res)=>{
    const url=req.url;
    if(url=='/About'){
        res.statusCode=200;
        res.setHeader('Content-Type','text/html');
        res.write("<h1>About</h1>")
        res.end();
    }
    else if(url=='/Contact'){
        res.statusCode=200;
        res.setHeader('Content-Type','text/html');
        res.write("<h1>Contact</h1>")
        res.end();
    }
    else if(url=='/XYZ'){
        res.statusCode=200;
        res.setHeader('Content-Type','text/html');
        res.write("<h1>XYZ</h1>")
        res.end();
    } 
    else{
        res.statusCode=404;
        res.setHeader('Content-Type','text/html');
        res.write("<h1>Not found!!!!!!!!!!!!!</h1>")
        res.end();
    }
    res.statusCode=200;
    res.setHeader('Content-Type','text/html')
    res.write("<h1>hello world</h1>");
    res.end();  
})
server.listen(3000,()=>{
    console.log('started');
})