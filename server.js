const express = require("express");
const cookieParser = require("cookie-parser")
const app = express();

app.use(cookieParser());

app.get('/',(req,res) =>{
    res.send("hello express");
})

//cookie相关
app.get('/setcookie',(req,res) =>{
    res.cookie('username','tom',{
        maxAge:1000 * 60 * 10
    })
    res.send("cookie设置成功")
})

app.get('/getcookie',(req,res) =>{
    console.log(req.cookies);
    res.send("cookie获取成功");
})

//获取路由的动态参数 req.params
app.get('/hello/:id',(req,res) =>{
    console.log(req.params);
    res.send("我来了么");
})
app.get("/world/:name/:age", (req, res) => {
    console.log(req.params); // { name: '张三', age: 18 }
    console.log(req.get("Accept"));
    res.send("hello world");
});

app.listen(3000);