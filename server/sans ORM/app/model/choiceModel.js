const db = require('../../connection');

module.exports = {
  createChoice: (req, res) => {
    const query = '';

    // execute query
    db.query(query, (err, result) => {
      if (err) throw err;
      res.send(result);
    });
  },

  deleteChoice: (req, res) => {
    const query = '';

    // execute query
    db.query(query, (err, result) => {
      if (err) throw err;
      res.send(result);
    });
  },

  editChoice: (req, res) => {
    const query = '';

    // execute query
    db.query(query, (err, result) => {
      if (err) throw err;
      res.send(result);
    });
  },
};
