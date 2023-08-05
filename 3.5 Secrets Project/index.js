import  express  from "express";
import bodyParser from "body-parser";
import {dirname} from "path";
import { fileURLToPath } from "url";

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));
const port = 3000;
var passCheck = false;


app.use(bodyParser.urlencoded({extended:true}));

function checkPass(req,res,next){
   const pass =  req.body["password"];
   if(pass == "muzzi"){
    passCheck = true;
    
}
next();
}

app.use(checkPass);


app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/public/index.html");

})

app.post("/check",(req,res)=>{
    if(passCheck == true){
        res.sendFile(__dirname+"/public/secret.html");
    }
    else{
        res.sendFile(__dirname+"/public/index.html");
    }
})


app.listen(port,()=>{
    console.log(`sever started at port ${port}`);
})




























