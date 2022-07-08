// Model to use for entering passenger information into flights

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const passengerSchema = new Schema({ // All user fields must be input to be a valid passenger
    passId: [{ // Group together name and Date of Birth
        firstName: String,
        lastName: String,
        dateOfBirth: Date,
    }],
    address: [{ // Group together Address info
        streetAddress: String,
        city: String,
        state: String,
        zip: Number,
    }],
    socialSecurity: { // Social Security will be a unique identifier we can use to find passengers and must all follow the same parameters
        type: Number,
        minlength: 9,
        maxlength:9,
        unique: true,
        required: true
    },
    flightNumber: { // We wouldn't add a user unless they were on a flight. We can update this if they change flights
        type: String,
        minlength:6,
        maxlength:6,
    }
});

const Passenger = mongoose.model('Passenger', passengerSchema, 'Passengers');
module.exports = Passenger;