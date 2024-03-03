/* Get meals page */
const meals = (req, res) => {
    res.render('meals', { title: 'Meals Page', mealsSelected: true });
};

module.exports = {
    meals
};