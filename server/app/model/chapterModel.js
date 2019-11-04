const db = require('../../connection');

module.exports = {
  getChapter: (req, res) => {
    const query = 'SELECT * FROM situation WHERE id=?';
    const params = [req.params.id];
    // execute query
    db.query(query, params, (err, result) => {
      if (err) throw err;
      res.send(result);
    });
  },

  getChapterChoices: (req, res) => {
    const query = 'SELECT id, text, id_situation_parent, CASE WHEN id=15 THEN \'/signup\' WHEN id=16 THEN \'/story/2\' ELSE id_situation_child END as id_situation_child FROM choice WHERE id_situation_parent=?';
    const params = [req.params.id];
    // execute query
    db.query(query, params, (err, result) => {
      if (err) throw err;
      res.send(result);
    });
  },

  createChapter: (req, res) => {
    const { text, recap, selectedColor } = req.body;
    const story_id = req.params.id;
    const query = 'INSERT INTO situation (text, recap, color, story_id) VALUES (?,?,?,?)';
    const params = [text, recap, selectedColor, story_id];
    // execute query
    db.query(query, params, (err, result) => {
      if (err) throw err;
      res.send(result);
    });
  },

  deleteChapter: (req, res) => {
    const query = 'DELETE FROM situation WHERE id=?';
    const params = [req.body.id];
    // execute query
    db.query(query, params, (err, result) => {
      if (err) throw err;
      res.sendStatus(200);
    });
  },

  editChapter: (req, res) => {
    const { text, recap, selectedColor, id } = req.body;
    const query = 'UPDATE situation SET text=?, recap=?, color=? WHERE id=?';
    const params = [text, recap, selectedColor, id];
    // execute query
    db.query(query, params, (err, result) => {
      if (err) throw err;
      res.send(result);
    });
  },

  getAllChapters: (req, res) => {
    const query = 'SELECT * FROM situation WHERE story_id=?';
    const params = [req.params.id];
    // execute query
    db.query(query, params, (err, result) => {
      if (err) throw err;
      res.send(result);
    });
  },
};
