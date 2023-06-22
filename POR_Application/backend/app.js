const env = require("dotenv");
const express = require("express");
const cors = require('cors');
const cookieParser = require('cookie-parser');
const loginRoute = require("./routes/loginRoutes");
require('dotenv').config();
const mongoose = require('mongoose');
const CONNECTION_STRING = process.env.CONNECTION_STRING;
mongoose.connect(CONNECTION_STRING,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("MongoDB successfully connected"))
    .catch((err) => console.error(err));

const PORT = process.env.APP_PORT;
const app = express();

app.listen(PORT, (error) => {
    if(!error){
        console.log("Server is successfully running. App is listening on port "+PORT);
    }
    else{
        console.log("Error occurred, server is unable to start.", error);
    }
});

app.use(
    cors({
        origin: [`https://localhost:${PORT}`],
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials: true,
    })
);

app.use(express.json());
app.use(cookieParser());
app.use("/", loginRoute);

