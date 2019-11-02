const db = require('../../connection');

module.exports = {
  createChoice: (req, res) => {
    const { text, id_situation_parent, id_situation_child } = req.body;
    const query = 'INSERT INTO choice (text, id_situation_parent, id_situation_child) VALUES (?,?,?)';
    const params = [text, id_situation_parent, id_situation_child];
    // execute query
    db.query(query, params, (err, result) => {
      if (err) throw err;
      res.send(result.insertId);
    });
  },

  deleteChoice: (req, res) => {
    const query = 'DELETE FROM choice WHERE id=?';
    const params = [req.body.id];
    // execute query
    db.query(query, params, (err, result) => {
      if (err) throw err;
      res.send(result);
    });
  },

  editChoice: (req, res) => {
    const { text } = req.body;
    const query = 'UPDATE choice SET text=?, updated_at=NOW() WHERE id=?';
    const params = [text, req.params.id];
    // execute query
    db.query(query, params, (err, result) => {
      if (err) throw err;
      res.send(result);
    });
  },
};
