import express from "express";
const app = express();
const port = 3000;


app.get("/",function(req,res){
// console.log(request);
res.send("hello");
});

app.get("/contact",function(req,res){
    res.send(`this is contact`);
});

app.get("/about",(req,res)=>{
    res.send(`my name is muzammil`);
});



app.listen(port,()=>{
    console.log(`server started at port ${port}`);
});