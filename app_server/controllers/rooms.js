/* Get rooms page */
const rooms = (req, res) => {
    res.render('rooms', { title: 'Rooms Page', roomsSelected: true });
};

module.exports = {
    rooms
};