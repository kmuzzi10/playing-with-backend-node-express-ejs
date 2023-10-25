import express from "express";
import bodyParser from "body-parser";
//import ends

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));



app.get("/", (req, res) => {
  
  res.render("index.ejs",{
    heading : "<h1>enter your letter below</h1>",
  });
  
});

app.post("/submit", (req, res) => {
  var data1 = req.body["fName"];
  var data2 = req.body["lName"];
  var mix = data1.length + data2.length;

  res.render("index.ejs",{
    heading: `<h1>there are ${mix} letters in your name</h1>`
  })
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
