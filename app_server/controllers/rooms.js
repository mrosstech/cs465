var fs = require('fs');

var roomTypes = JSON.parse(fs.readFileSync('./data/rooms.json', 'utf8'));
/* Get rooms page */
const rooms = (req, res) => {
    res.render('rooms', { title: 'Rooms Page', roomsSelected: true, roomTypes });
};

module.exports = {
    rooms
};