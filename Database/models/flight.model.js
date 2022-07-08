// Schema for flight creation

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const flightSchema = new Schema ({ // All fields must be input to have a valid flight created
    flightNumber: {
        type: String,
        minlength:6,
        maxlength:6,
        unique: true, // Can not have two flights with the same flight number
        required: true
    },
    currentPassengers: { // Always set current passengers to 0 when creating a flight and add them via a reducer
        type: Number,
        default: 0,
        required: true,
    },
    maxPassengers: { // Different flights will have different values so this must be set during creation
        type: Number,
        required: true,
    },
    departureDate: {
        type: String,
        required: true,
    },
    departureTime: {
        type: String,
        required: true,
    },
    departureAirport: {
        type: String,
        required: true,
    },
    arrivalDate: {
        type: String,
        required: true
    },
    arrivalTime: {
        type: String,
        required: true,
    },
    arrivalAirport: {
        type: String,
        required: true,
    }
});

const Flight = mongoose.model('Flight', flightSchema, 'Flights');
module.exports = Flight;