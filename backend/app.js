const env = require("dotenv");
const express = require("express");
const cors = require('cors');
const cookieParser = require('cookie-parser');

const loginRoute = require("./routes/loginRoutes");
const applicationRoutes = require("./routes/application.routes");
const instituteBodyRoutes = require("./routes/instituteBody.routes");

require('dotenv').config();
const mongoose = require('./utils/dbConnSetup');
const CONNECTION_STRING = process.env.CONNECTION_STRING;

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
        origin: "*",
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials: true,
    })
);

app.use(express.json());
app.use(cookieParser());

app.use("/", loginRoute);
app.use("/api", applicationRoutes);
app.use("/api", instituteBodyRoutes);
