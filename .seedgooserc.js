// .seedgooserc.js
require('dotenv').config();

mongoURL = process.env.DB_HOST;


module.exports = {
  modelBaseDirectory: 'app_server/models', // model directory name
  models: '**/*.js', // model matcher
  data: 'data', // data directory name
  db: `mongodb+srv://${mongoURL}/travlr` // db connection url
};