const {MongoClient} = require('mongodb');

async function retrieveEntry(connectionString, filter){
    const client = new MongoClient(connectionString);

    try{
        await client.connect();

        const db = client.db("IITB");

        const collection = db.collection("Students");

        //const filter = {"_id": uniqueId};

        const result = await collection.find(filter).toArray()
        console.log(result);
        return result;
    } catch(e) {
        console.log("Error Connecting to DB")
    } finally {
        await client.close();

    }
}

module.exports = {retrieveEntry};