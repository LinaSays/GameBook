const db = require('../../connection');

module.exports = {
  getChapter: (req, res) => {
    const query = `SELECT * FROM situation WHERE id=${req.params.id}`;

    // execute query
    db.query(query, (err, result) => {
      if (err) throw err;
      res.send(result);
    });
  },

  createChapter: (req, res) => {
    const { text, recap, colorPicker } = req.body;
    const story_id = req.params.id;
    const query = `INSERT INTO situation (text, recap, color, story_id) VALUES ('${text}','${recap}','${colorPicker}',${story_id})`;

    // execute query
    db.query(query, (err, result) => {
      if (err) throw err;
      res.send(result);
    });
  },

  deleteChapter: (req, res) => {
    const query = `DELETE FROM situation WHERE id=${req.body.id}`;

    // execute query
    db.query(query, (err, result) => {
      if (err) throw err;
      res.send(result);
    });
  },

  editChapter: (req, res) => {
    const { text, recap, color } = req.body;
    const query = `UPDATE situation SET text='${text}', recap='${recap}', color='${color}' WHERE id=${req.params.id}`;

    // execute query
    db.query(query, (err, result) => {
      if (err) throw err;
      res.send(result);
    });
  },
};
