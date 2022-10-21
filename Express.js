//---------------------demo express----------

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

//-----------------------use middleWare----------------------------------------
// app.get('/',(req,res,next)=>{
//     // res.send("hello 123");
//     console.log(res.body);
//     next();
// })
// app.get('/',(req,res)=>{
//     res.send("About 1234");
// })

//----------------------------------using string pattern-----------------
// app.get('/',(req,res)=>{
//     res.send("hello");
// })
// app.get('/ab?c',(req,res)=>{
//     res.send('hello 123');
// })

//------------------using regular expression------------------
// app.get('/*fly$/',(req,res)=>{
//     res.send('you can fly!!!!!!!!!!!!!!');
// })


//----------------------- using id----------------------
// app.get('/user/:userid/book/:bookid',(req,res)=>{
//         res.send(req.params);
// })

//---------------------------- using route handlers ------------
// app.get('/get',(req,res,next)=>{
//     console.log("password checker");
//     next();
// },
//     (req,res)=>{
//         res.send("hello from 2"); 
//     }
// )

// const passwordChecker=(req,res,next)=>{
//     console.log("password Checker");
//     next();
// }

// const hello=(req,res)=>{
//     res.send('hello from hello');
// }


// app.get('/get',[passwordChecker,hello])

//----------------------------------app.use()method ------------

// app.use('/admin',(req,res,next)=>{
//     res.sendfile('hello.html');
//     next();
// })

// ---------------------------------with express router--------------

        // const express = require('express')
        // const app = express();

        // const useRouter=require('./admin');

        // app.use(useRouter);
    // app.get('/',(req,res)=>{
    //     res.send('hello');
    // })

app.listen(3000,()=>{
    console.log('Started');
})   
