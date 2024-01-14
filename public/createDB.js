var MongoClient = require('mongodb').MongoClient 
const uri = "mongodb://localhost:27017/"
const client = new MongoClient(uri)
async function run() {
    try {
        await client.connect();
        var database = client.db("jar"); database.dropDatabase()
        database = client.db("jar");
        const bank = database.collection("bank");
        const result = await bank.insertOne({name:"Бутылка"}); 
        console.log(`${result} documents were inserted`);
    } 
    finally {
           await client.close();
    } 
}
run()