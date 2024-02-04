const mongoose = require('mongoose');
const Model = mongoose.model('trips');

/* Get trips from DB */
// GET: /trips - lists all the trips
const tripList = async (req, res) => {
    Model
        .find({})
        .exec((err, trips) => {
            if (!trips) {
                return res
                    .status(404)
                    .json({ "message": "trips not found" }); 
            } else if (err) {
                return res
                    .status(404)
                    .json(err);
            } else {
                return res
                    .status(200)
                    .json(trips);
            }
        });
}

// GET: /trips/:tripCode - returns a single trip
const tripsFindByCode = async (req, res) => {
    Model
        .find({ "code": req.params.tripCode })
        .exec((err, trip) => {
            if (!trip) {
                return res
                    .status(404)
                    .json({ message: "trip not found"});
            } else if (err) {
                return res
                    .status(404)
                    .json(err);
            } else {
                return res
                    .status(200)
                    .json(trip);
            }
        });
};



/* Get trips page */
const trips = (req, res) => {
    res.render('travel', { title: 'Travel Page', travelSelected: true, trips });
};

module.exports = {
    tripsList,
    tripsFindByCode
};