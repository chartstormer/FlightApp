// Code for CRUD on passengers

const router = require('express').Router();
const { createPassenger, findPassengerById, findAllPassengers } = require('../controllers/passenger.controller');

// Create a new Passenger using Post
router.post('/', async (req, res) => {
    try {
        const socialSecurity = await createPassenger(req.body);
        res,status(201).json({_id: socialSecurity});
    } catch (err) {
        res.status(err?.status || 500).json(err);
    }
});

// Get all passengers 
router.get('/', async (req, res) => {
    const passengers = await findAllPassengers();
    res.json(passengers);
});

// Get a passenger by the unique Social Security number
router.get('/', async (req, res) => {
    try{
    const socialSecurity = await findPassengerById(req.params.socialSecurity);
    res.json(socialSecurity);
    } catch (err) {
        res.status(err?.status || 404).json(err); // 404 for Passenger not found
    }
})

module.exports = router;