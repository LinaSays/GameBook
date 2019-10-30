const jwt = require('jsonwebtoken');
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
    const { token } = req.cookies;
    const { title, summary, select, customFile } = req.body;
    const published = 0;
    jwt.verify(token, 'cypok', (err, decoded) => {
      if (err) {
        res.status(401).send('Unauthorized: Invalid token');
      }
      else {
        db.beginTransaction((err) => {
          if (err) throw err;
          try {
            const author_id = decoded.user;
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
                  res.send(`${storyId}`);
                });
              });
            });
          }
          catch (ex) {
            db.rollback();
            throw ex;
          }
        });
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
    const { title, summary, select } = req.body;

    db.beginTransaction((err) => {
      if (err) throw err;
      try {
        // execute query 1 
        let query = `UPDATE story SET title='${title}', description='${summary}' WHERE id=${req.body.id}`;
        db.query(query, (err1, result) => {
          if (err1) throw err1;
          const storyId = req.body.id;

          // execute query 2
          query = `UPDATE story_has_category SET category_id=${select} WHERE story_id=${storyId}`;
          db.query(query, (err2, result2) => {
            if (err2) throw err2;
            db.commit((err3) => {
              if (err3) throw err3;
              res.send(`${storyId}`);
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

  publishStory: (req, res) => {
    const published = 1;
    const query = `UPDATE story SET published='${published}' WHERE id=${req.body.id}`;

    // execute query
    db.query(query, (err, result) => {
      if (err) throw err;
      res.send(result);
    });
  },
};
