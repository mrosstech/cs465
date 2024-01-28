var fs = require('fs');

var trips = JSON.parse(fs.readFileSync('./data/trips.json', 'utf8'));

/* Get travel page */
const travel = (req, res) => {
    res.render('travel', { title: 'Travel Page', travelSelected: true, trips });
};

module.exports = {
    travel
};