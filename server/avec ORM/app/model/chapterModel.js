const db = require('../../connection');

module.exports = {
  getChapter: (req, res) => {
    const query = '';

    // execute query
    db.query(query, (err, result) => {
      if (err) throw err;
      res.send(result);
    });
  },

  createChapter: (req, res) => {
    const query = '';

    // execute query
    db.query(query, (err, result) => {
      if (err) throw err;
      res.send(result);
    });
  },

  deleteChapter: (req, res) => {
    const query = '';

    // execute query
    db.query(query, (err, result) => {
      if (err) throw err;
      res.send(result);
    });
  },

  editChapter: (req, res) => {
    const query = '';

    // execute query
    db.query(query, (err, result) => {
      if (err) throw err;
      res.send(result);
    });
  },
};
