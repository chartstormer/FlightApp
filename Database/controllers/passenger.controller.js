// Code to create new passengers using the parameters from the passenger scehma

const Passenger = require("../models/passenger.model");

const createPassenger = async ({passId, address, socialSecurity, flightNumber}) => {
    try{
        const passenger = new Passenger({ // Creating the passenger using the fields from the Passenger Schema
            passId,
            address,
            socialSecurity,
            flightNumber,
        });
        await passenger.save(); // Saves the newly created Passenger

        return passenger.flightNumber; // Returns the passenger's flight number
    } catch (err) {
        console.error(err);
        throw {status: 400, message: err};
    };
}

const findPassengerById = async socialSecurity => { // Since every passenger will have a unique Social Security we use that as the lookup
    try{
        const passenger = await Passenger.findById(socialSecurity);
        if (socialSecurity == null) { // If no passenger with that Social Security exists
            throw `No Passenger with that Social Security Number: ${socialSecurity}.`;
        }
        return passenger; // If a passenger with that Social Security is found return them
    } catch (err) {
        console.error(err);
        throw {status: 400, message: err};
    }
}

const findAllPassengers = async () => { // Find all registered passengers
    const passengers = await Passenger.find();
    return passengers;
}

module.exports = { createPassenger, findPassengerById, findAllPassengers };