import express from "express";
import {dirname} from "path";
import { fileURLToPath } from "url";
import morgan from "morgan";
import bodyParser from "body-parser";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
var band ="";


app.use(bodyParser.urlencoded({extended:true}));


function bandName(req,res,next){
   console.log(req.body);
   band = req.body["street"]+req.body["pet"];
   next();


}

app.use(bandName);

app.use(morgan("tiny"));

app.get("/",(req,res)=>{
  res.sendFile(__dirname+"/public/index.html");
});

app.post("/submit",(req,res)=>{
  
  res.send("<h1>your band name is</h1>"+"<br>"+band);
  
  
})


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
