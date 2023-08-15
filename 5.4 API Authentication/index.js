import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com/";


const yourUsername = "muzzi";      
const yourPassword = "muzzi";
const yourAPIKey = "7ca38661-be29-4c51-96a6-fe86a83b57c6";
const yourBearerToken = "a54d4f65-6acd-485b-9b92-e16add99af76";

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "API Response." });
});

app.get("/noAuth", async (req, res) => {
  
  try {
    const response = await axios.get("https://secrets-api.appbrewery.com/random");
    const result = response.data;
    const data = JSON.stringify(result);
    res.render("index.ejs", { content: data })
  } catch (err) {
    res.status(404).send(err.message);
  }
});

app.get("/basicAuth", async (req, res) => {
 
  try{
    const result = await axios.get("https://secrets-api.appbrewery.com/all?page=1",{
      auth:{
        username : yourUsername,
        password:yourPassword
      }
    })
    res.render("index.ejs",{content:JSON.stringify(result.data)})
  }catch(err){
    res.status(404).send(err.message)
  }
  
  
  
});

app.get("/apiKey", async (req, res) => {
  
  try{
    const response = await axios.get(`https://secrets-api.appbrewery.com/filter`,{
      params:{
        score:5,
        apiKey:yourAPIKey
      }
    })
    res.render("index.ejs",{content:JSON.stringify(response.data)})
  }catch(err){
    res.status(404).send(err.message)
  }
  
});

app.get("/bearerToken", async (req, res) => {
  try{
   const response = await axios.get("https://secrets-api.appbrewery.com/secrets/42", {
      headers: { 
        Authorization: `Bearer ${yourBearerToken}` 
      },
    });
    res.render("index.ejs",{content:JSON.stringify(response.data)})
  }catch(err){
   res.status(404).send(err.message);
  }
  
  
 
  
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
