const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser')
const authRoute = require('./routes/AuthRoute');

require('dotenv').config();
const connectionString = process.env.ATLAS_URI.toString();

mongoose.connect(connectionString,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("MongoDB Successfully connected."))
    .catch((err) => console.error(`The following error occured: ${e}`));

const app = express();
const PORT = 4000;

app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}.`);
});

app.use(
    cors({
        origin: [`https://localhost:${PORT}`],
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials: true,
    })
)

app.use(express.json());

app.use(cookieParser());

app.use("/", authRoute);


