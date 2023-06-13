const {MongoClient} = require('mongodb');

async function createEntry(connectionString, entry) {
    const client = new MongoClient(connectionString);
    try {
        await client.connect();

        const db = client.db('IITB');

        const collection = db.collection("Students");

        const result = await collection.insertOne(entry);

        console.log('New Entry Created: ', result.insertedId);
    } catch (e) {
        throw e;
    } finally {
        await client.close();
    }
}

module.exports = {createEntry};