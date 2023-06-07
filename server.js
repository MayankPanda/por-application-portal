const express = require('express');
const mongoose = require('mongoose');

const app = express();

// Connect to the MongoDB database
mongoose.connect('mongodb://localhost:27017/my-database');

// Create a new route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start the server
app.listen(3000);