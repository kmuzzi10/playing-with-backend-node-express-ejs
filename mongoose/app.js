import mongoose from "mongoose";

mongoose.connect("mongodb://127.0.0.1:27017/fruitsDB");


const fruitSchema = mongoose.Schema({
  name:{ 
    type:String,
    required:true
  },
  rating: {
    type:Number,
    min:1,
    max:10
  },
  review: String
});

const Fruit = mongoose.model("Fruit",fruitSchema);

const fruit = new Fruit({
  
  rating:7,
  review:"solid thing"
})


fruit.save();



// const kiwi = {
//   name:"kiwi",
//   rating:4,
//   reviw:"i dont like much kiwi"
// }
// const orange = {
//   name:"orange",
//   rating:9,
//   review:"i love this soo much"
// }
// const banana = {
//   name:"banana",
//   rating:6,
//   review:"weird texture"
// }

// Fruit.insertMany([kiwi,orange,banana])

// var fruits =await Fruit.find({}).exec(); 
//  fruits.forEach(element => {
//   console.log(element.name)
 
// });
mongoose.connection.close()

const personSchema =mongoose.Schema({
  name:String,
  age:Number
});

const Person = mongoose.model("Person",personSchema);


const person = new Person({
  name:"john",
  age:37
});


// person.save();




