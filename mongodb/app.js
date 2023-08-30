import { MongoClient } from "mongodb";

// Replace the uri string with your MongoDB deployment's connection string.
const uri = "mongodb://127.0.0.1:27017";

const client = new MongoClient(uri);

async function run() {
  try {
    const database = client.db("DBfruit");
    const fruits = database.collection("fruits");
    // create a document to insert
    const doc = [{
      _id: 1,
      name: "apple",
      score: 6
    },
    {
      _id: 2,
      name: "kiwi",
      score: 4
    },
    {
      _id: 3,
      name: "banana",
      score: 9
    },
    {
      _id:4,
      name:"orange",
      score:5
    }
    ]
    //insertion

    // const result = await fruits.insertMany(doc);
    // console.log(`A document was inserted with the _id: ${result.insertedId}`);

    //reading
    // const cursor = fruits.find();
    // if (await cursor==0){
    //     console.log("document not found")
    // }
    // for await (const data of cursor){
    //   console.log(data)
    // }

    
  } finally {
    await client.close();
  }
}
run().catch(console.dir);



