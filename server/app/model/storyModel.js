const jwt = require('jsonwebtoken');
const db = require('../../connection');

const secret = process.env.SECRET_PASS;

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
    const query = 'SELECT * FROM situation where situation.story_id = ? and situation.id not in (select distinct id_situation_child from choice where id_situation_child is not null)';
    const params = [story_id];
    // execute query
    db.query(query, params, (err, result) => {
      if (err) throw err;
      if (result.length > 0) {
        // chapter.getChapter(result[0].id);
        res.redirect(`/chapter/${result[0].id}`);
      }
    });
  },

  createStory: (req, res) => {
    const { token } = req.cookies;
    const {
      title, summary, select, customFile,
    } = req.body;
    const published = 0;
    jwt.verify(token, secret, (err, decoded) => {
      if (err) {
        res.status(401).send('Unauthorized: Invalid token');
      }
      else {
        db.beginTransaction((err) => {
          if (err) throw err;
          try {
            const author_id = decoded.user;
            // execute query 1 
            let query = 'INSERT INTO story (title, description, published, author_id) VALUES (?, ?, ?, ?)';
            const params = [title, summary, published, author_id];
            db.query(query, params, (err1, result) => {
              if (err1) throw err1;
              const storyId = result.insertId;

              // execute query 2
              query = 'INSERT INTO story_has_category (story_id, category_id) VALUES (?, ?)';
              const params2 = [storyId, select];
              db.query(query, params2, (err2, result2) => {
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
    const query = 'DELETE FROM story WHERE id=?';
    const params = [req.body.id];
    // execute query
    db.query(query, params, (err, result) => {
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
        let query = 'UPDATE story SET title=?, description=? WHERE id=?';
        const params = [title, summary, req.body.id];
        db.query(query, params, (err1, result) => {
          if (err1) throw err1;
          const storyId = req.body.id;

          // execute query 2
          query = 'UPDATE story_has_category SET category_id=? WHERE story_id=?';
          const params2 = [select, storyId];
          db.query(query, params2, (err2, result2) => {
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
    const { token } = req.cookies;
    const published = 1;
    const findPinsQuery = 'SELECT * FROM user_has_pins WHERE user_id=? AND pins_id=?';
    const query = 'UPDATE story SET published=? WHERE id=?';
    const params = [published, req.body.id];

    jwt.verify(token, secret, (err, decoded) => {
      if (err) {
        res.status(401).send('Unauthorized: Invalid token');
      }
      else {
        const author_id = decoded.user;
        const params2 = [author_id, 1];
        db.query(findPinsQuery, params2, (err1, result) => {
          if (err1) throw err1;
          if (result.length > 0) {
            db.query(query, params, (err2, result1) => {
              if (err2) throw err2;
              res.send(result1);
            });
          }
          else {
            db.beginTransaction((error) => {
              if (error) throw error;
              try {
                // execute query
                db.query(query, params, (err3, result2) => {
                  if (err3) throw err3;
                  const query1 = 'INSERT INTO user_has_pins (user_id, pins_id) VALUES (?, ?)';
                  db.query(query1, params2, (err4, result3) => {
                    if (err4) throw err4;
                    db.commit((err5) => {
                      if (err5) throw err5;
                      res.send(result2);
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
      }
    });
  },
};
