const db = require('../../connection');

module.exports = {
  createChoice: (req, res) => {
    const { text, id_situation_parent, id_situation_child } = req.body;
    const query = `INSERT INTO choice (text, id_situation_parent, id_situation_child) VALUES ('${text}','${id_situation_parent}','${id_situation_child}')`;

    // execute query
    db.query(query, (err, result) => {
      if (err) throw err;
      res.send(result.insertId);
    });
  },

  deleteChoice: (req, res) => {
    const query = `DELETE FROM choice WHERE id=${req.body.id}`;

    // execute query
    db.query(query, (err, result) => {
      if (err) throw err;
      res.send(result);
    });
  },

  editChoice: (req, res) => {
    const { text } = req.body;
    const query = `UPDATE choice SET text='${text}', updated_at=NOW() WHERE id=${req.params.id}`;

    // execute query
    db.query(query, (err, result) => {
      if (err) throw err;
      res.send(result);
    });
  },
};
