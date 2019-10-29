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
    const story_id = req.params.id;
    const query = `SELECT * FROM situation where situation.story_id = ${story_id} and situation.id not in (select distinct id_situation_child from choice where id_situation_child is not null)`;

    // execute query
    db.query(query, (err, result) => {
      if (err) throw err;
      if (result.length > 0) {
        // chapter.getChapter(result[0].id);
        res.redirect(`/chapter/${result[0].id}`);
      }
    });
  },

  createStory: (req, res) => {
    const { title, summary, select, customFile, author_id } = req.body;
    const published = 0;
    db.beginTransaction((err) => {
      if (err) throw err;
      try {
        // execute query 1 
        let query = `INSERT INTO story (title, description, published, author_id) VALUES ('${title}', '${summary}', ${published}, ${author_id})`;
        db.query(query, (err1, result) => {
          if (err1) throw err1;
          const storyId = result.insertId;

          // execute query 2
          query = `INSERT INTO story_has_category (story_id, category_id) VALUES ('${storyId}', '${select}')`;
          db.query(query, (err2, result2) => {
            if (err2) throw err2;
            db.commit((err3) => {
              if (err3) throw err3;
              res.send('Successful transaction!');
            });
          });
        });
      }
      catch (ex) {
        db.rollback();
        throw ex;
      }
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
    const { title, summary } = req.body;
    const query = `UPDATE story SET title='${title}', description='${summary}' WHERE id=${req.params.id}`;

    // execute query
    db.query(query, (err, result) => {
      if (err) throw err;
      res.send(result);
    });
  },
};
