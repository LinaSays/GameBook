// Import
const fallback = require('express-history-api-fallback');

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

// Server
const app = module.exports = express();


const root = `${__dirname}/public`;
app.use(express.static(root));
app.use(fallback('index.html', { root }));
app.use(cors({ origin: 'http://gamebook.tech', credentials: true }));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://gamebook.tech');
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE, PATCH, HEAD');
  next();
});


// Start on :3000
app.listen(3000);

// importing route
const routes = require('./app/routes');

routes(app);
