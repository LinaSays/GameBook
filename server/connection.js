const mysql = require('mysql');

// MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'aventure',
  password: 'aventure_cypok',
  database: 'aventure',
});

db.connect((err) => {
  if (err) throw err;
  console.log('Connected!');
});

module.exports = db;
