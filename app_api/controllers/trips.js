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


/* Add Trip */
const tripsAddTrip = async(req, res) => {
    Trip
    .create({
        code: req.body.code,
        name: req.body.name,
        length: req.body.length,
        start: req.body.start,
        resort: req.body.resort,
        perPerson: req.body.perPerson,
        image: req.body.image,
        description: req.body.description
    })
    .then((err, trip) => {
        if (err) {
            return res
                .status(400)
                .json(err);
        } else {
            return res
                .status(201)
                .json(trip);
        }
    })
}

const tripsUpdateTrip = async(req, res) => {
    console.log(req.body);
    Trip
        .findOneAndUpdate({ 'code': req.params.tripCode }, {
            code: req.body.code,
            name: req.body.name,
            length: req.body.length,
            start: req.body.start,
            resort: req.body.resort,
            perPerson: req.body.perPerson,
            image: req.body.image,
            description: req.body.description
        }, {new: true})
        .then(trip => {
            if (!trip) {
                return res
                    .status(404)
                    .send({
                        message: "Trip not found with code " + req.params.tripCode
                    });
            }
            res.send(trip);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res
                    .status(404)
                    .send({
                        message: "Trip not found with code " + req.params.tripCode
                    });
            }
            return res
                .status(500)
                .json(err);
        });
}
module.exports = {
    tripList,
    tripsFindByCode,
    tripsAddTrip,
    tripsUpdateTrip
};