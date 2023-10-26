//import statement ends
import express from "express";
import axios from "axios";

const app = express();
const port = 3000;

app.use(express.static("public"));
const API_URL = "https://secrets-api.appbrewery.com/random";

app.get("/",async (req,res)=>{
    try{
        const result = await axios.get(API_URL);
        const final = result.data;
        res.render("index.ejs",{secret:final.secret,user:final.username})
    }catch(err){
        res.status(404).send(err.message);
    }
    
})


app.listen(port,()=>{
    console.log(`server started at port ${port}`)
})