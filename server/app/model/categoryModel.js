const db = require('../../connection');

module.exports = {
  getDemoStories: (req, res) => {
    const query = 'SELECT story.id, story.title, story.description, story.image, user.name FROM story LEFT JOIN user ON story.author_id = user.id LIMIT 3';

    // execute query
    db.query(query, (err, result) => {
      if (err) throw err;
      res.send(result);
    });
  },

  getAllCategories: (req, res) => {
    const query = 'SELECT * FROM category'; // query database to get all the categories

    // execute query
    db.query(query, (err, result) => {
      if (err) throw err;
      res.send(result);
    });
  },

  getCategory: (req, res) => {
    const query = `SELECT S.*, C.name as category, U.name as author FROM story S LEFT JOIN story_has_category H ON S.id = H.story_id LEFT JOIN category C ON H.category_id = C.id LEFT JOIN user U ON S.author_id = U.id WHERE C.id=${req.params.id}`;

    // execute query
    db.query(query, (err, result) => {
      if (err) throw err;
      res.send(result);
    });
  },
};
