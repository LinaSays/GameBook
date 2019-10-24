// Import
const express = require('express');
const bodyParser = require('body-parser');

// Server
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

const { sequelize } = require('./connection');

sequelize.sync({ force: true })
  .then(() => {
    console.log('New data!');
  });

// Start on :3000
app.listen(3000);

// importing route
const routes = require('./app/routes');

routes(app);
