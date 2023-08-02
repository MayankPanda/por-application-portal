const mongoose = require("mongoose");

require("dotenv").config();

const CONN_URI = process.env.CONNECTION_STRING;

mongoose.connect(CONN_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: "por_db",
})
.then(() => {
    console.log("Connected to MongoDB");
})
.catch((error) => {
    console.error("Error connecting to MongoDB: ", error);
});

module.exports = mongoose;