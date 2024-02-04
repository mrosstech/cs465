const mongoose = require('mongoose');
const Trip= require('../models/trips');

/* Get trips from DB */
// GET: /trips - lists all the trips
const tripList = async (req, res) => {
    await Trip
        .find()
        .then((trips) => {
            if (!trips) {
                console.log("No trips found");
                return res
                    .status(404)
                    .json({ "message": "trips not found" }); 
            }  else {
                console.log("Returning trips");
                return res
                    .status(200)
                    .json(trips);
            }
        }).catch( (err) => {
            console.log("Error in finding trips" + err);
            return res
                .status(404)
                .json(err);
        });
}

// GET: /trips/:tripCode - returns a single trip
const tripsFindByCode = async (req, res) => {
    Trip
        .find({ "code": req.params.tripCode })
        .then((trip) => {
            if (!trip) {
                return res
                    .status(404)
                    .json({ message: "trip not found"});
            } 
            else {
                return res
                    .status(200)
                    .json(trip);
            }
        }).catch( (err) => {
            return res
                .status(404)
                .json(err);
        });
};



/* Get trips page */
const trips = (req, res) => {
    res.render('travel', { title: 'Travel Page', travelSelected: true, trips });
};

module.exports = {
    tripList,
    tripsFindByCode
};