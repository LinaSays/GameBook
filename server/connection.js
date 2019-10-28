const mysql = require('mysql');
const session = require('express-session');

const app = require('./index');

const options = {
  host: 'localhost',
  user: 'aventure',
  password: 'aventure_cypok',
  database: 'aventure',
};

// MySQL connection
const db = mysql.createConnection(options);

db.connect((err) => {
  if (err) throw err;
  console.log('Connected!');
});


module.exports = db;
