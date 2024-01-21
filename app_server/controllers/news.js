/* Get news page */
const news = (req, res) => {
    res.render('news', { title: 'News Page', newsSelected: true });
};

module.exports = {
    news
};