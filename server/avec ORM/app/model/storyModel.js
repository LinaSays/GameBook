const db = require('../../connection');

module.exports = {
  getAllStories: (req, res) => {
    const query = 'SELECT * FROM story';

    // execute query
    db.query(query, (err, result) => {
      if (err) throw err;
      res.send(result);
    });
  },

  getStory: (req, res) => {
    const query = '';

    // execute query
    db.query(query, (err, result) => {
      if (err) throw err;
      res.send(result);
    });
  },

  createStory: (req, res) => {
    const { title, summary, select, customFile } = req.body;
    const query = `INSERT INTO story (title, description) VALUES ('${title}', '${summary}')`;

    // execute query
    db.query(query, (err, result) => {
      if (err) throw err;
      res.send(result);
    });
  },

  deleteStory: (req, res) => {
    const query = `DELETE FROM story WHERE id=${req.body.id}`;

    // execute query
    db.query(query, (err, result) => {
      if (err) throw err;
      res.send('L\'histoire a été supprimée');
    });
  },

  editStory: (req, res) => {
    const query = '';

    // execute query
    db.query(query, (err, result) => {
      if (err) throw err;
      res.send(result);
    });
  },
};
