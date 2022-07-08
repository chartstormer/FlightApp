// Code to create new Flights using the parameters from the flight model

const { updateOne } = require("../models/flight.model");
const Flight = require("../models/flight.model");

const createFlight = async ({flightNumber, currentPassengers, maxPassengers, departureTime, departureDate, departureAirport, arrivalDate, arrivalTime, arrivalAirport}) => {
    try{
        const flight = new Flight({ // Parameters which need to be input for the new flight
            flightNumber,
            currentPassengers,
            maxPassengers,
            departureDate,
            departureTime,
            departureAirport,
            arrivalDate,
            arrivalTime,
            arrivalAirport
        });
        await flight.save(); // Saves the newly created flight

        return flight.flightNumber; // Returns the flight number of the created flight
    } catch (err) {
        console.error(err); // Error for when flight info is not put in correctly
        throw {status: 400, message: err};
    };
}

const findFlight = async flightNumber => { // Used to find specific flight, flightNumber is unique so it should be used
    try{
        const flight = await Flight.findOne({flightNumber});
        if (flight == null) { // If no flight with that flightNumber exists
            throw `No flight was found with the Flight Number: ${flightNumber}.`;
        }
        return flight; // If a flight with that flightNumber does exist then return it
    } catch (err) {
        console.error(err);
        throw {status: 404, message: err}; // 404 for error not found
    }
}

const findAllFlights = async () => {
    const flights = await Flight.find(); // Get all the possible flights
    return flights;
}

const deleteFlight = async flightNumber => {
        const flight = await Flight.deleteOne({flightNumber});
        return flight;    
}

const updateFlight = async (flightNumber, updatedFlight) => {
    try {
        const flight = await Flight.findOneAndUpdate({ flightNumber },
            updatedFlight, { new : true });
            console.log(flightNumber);
        if (flight == null) {
            throw `No flight with ${flightNumber} exists`;
        return flight;
        }
    } catch (err) {
            console.error(err);
            throw {status: 404, message: err}; // 404 for error not found 
    };

}


module.exports = { createFlight, findFlight, findAllFlights, deleteFlight, updateFlight }; // Export to use in other places around the app