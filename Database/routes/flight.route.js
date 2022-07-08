// Code for CRUD on flights

const router = require('express').Router();
const { createFlight, findFlight, findAllFlights, deleteFlight, updateFlight } = require('../controllers/flight.controller');

//Create a new Flight using Post
router.post('/', async (req, res) => {
    try{
        const flightNumber = await createFlight(req.body);
        res.status(201).json(`Flight number:  ${flightNumber} successfully created`);
    } catch (err) {
        res.status(err?.status || 500).json(err);
    }
});

// Edit an existing flight
router.put('/:id', async (req, res) => {
    try{
   
    const updatedFlight = await updateFlight(req.params.id, req.body);
    console.log(req.body);
    res.status(201).json(updatedFlight);
    } catch (err) {
        res.status(err?.status || 404).json(err); // 404 for flight not found
    }
});

// Delete an existing flight
router.delete('/:id', async (req, res) => {
    try {
        const flightNumber = await deleteFlight(req.params.id);
        res.json({flightNumber});
    } catch (err) {
        res.status(err?.status || 404).json(err); // 404 for flight not found
    }
});

// Get All Flights
router.get('/', async (req, res) => {
    const flights = await findAllFlights();
    res.json(flights);
});

//Get a flight by the unique flightNumber
router.get('/:id', async (req, res) => {
    try{
    const flightNumber = await findFlight(req.params.id); // Find flight by entering in the ID
    res.json(flightNumber);
    } catch (err) {
        res.status(err?.status || 404).json(err); // 404 for Flight not found
    }
});


module.exports = router;