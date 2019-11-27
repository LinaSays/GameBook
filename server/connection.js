const mysql = require('mysql');

const app = require('./index');

const options = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_DB,
};

// MySQL connection
const db = mysql.createConnection(options);

db.connect((err) => {
  if (err) throw err;
  console.log('Connected!');
});


module.exports = db;
