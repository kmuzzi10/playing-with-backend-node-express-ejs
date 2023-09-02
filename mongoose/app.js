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
  name:"grapes",
  rating:8,
  review:"lovely"
})


//  await fruit.save();                                                     //save fruit


// await Fruit.updateOne({_id:"64f25924b56c248e85498179"},{rating:10})        //update query

// await Fruit.deleteOne({name:"grapes"})                                 //delete one

// await Fruit.deleteMany({name:"grapes"})                                    //delete many


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

// Fruit.insertMany([kiwi,orange,banana])          //insert many document

// var fruits =await Fruit.find({}).exec();        //find documents
//  fruits.forEach(element => {
//   console.log(element.name)
 
// });


const personSchema =mongoose.Schema({
  name:String,
  age:Number,
  favoriteFruit : fruitSchema
});

const Person = mongoose.model("Person",personSchema);
const mango = new Fruit({
  name:"mango",
  rating:10,
  review:"awesome fruit"
})
// mango.save()

await Person.updateOne({_id: '64efe64595aad8b49b64148e'},{favoriteFruit:mango})

// const person = new Person({
//   name:"amy",
//   age:12,
//   favoriteFruit:pineapple
// });


// person.save();


mongoose.connection.close()



