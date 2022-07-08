const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors');
const logger = require('./middleware/logger');



const app = express();

const PORT = process.env.PORT || 8080; // Set the port with the .env file if it isn't set then go 8080

app.use(express.json());
app.use(cors());
app.use(logger);


app.use('/flights', require('./routes/flight.route.js'));

app.all('*', (req, res) => {
    res.status(400).send('We don\'t have the flight plans you\'re looking for');
});

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log(`Successfully connected to the Database!`);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });


app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`)
});