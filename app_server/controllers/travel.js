/* Get travel page */
const travel = (req, res) => {
    res.render('travel', { title: 'Travel Page' });
};

module.exports = {
    travel
};