import mySuperHero from "superheroes";
import mySuperVillian from "supervillains";
import myMovie from "random-movie-names";
import fs from "fs";



// fs.readFile("./muzzi.txt","utf-8",(err,data)=>{
//     if(err)throw(err);
//     console.log(data)
// })


var a = mySuperHero.random();

fs.writeFile("hero.txt",a,(err,data)=>{
    if(err)throw(err);
    console.log(data);
});

fs.readFile("./hero.txt","utf-8",(err,data)=>{
    if(err)throw(err);
    console.log(data)
})


