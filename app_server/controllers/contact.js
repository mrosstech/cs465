/* Get contact page */
const contact = (req, res) => {
    res.render('contact', { title: 'Contact Page', contactSelected: true });
};

module.exports = {
    contact
};