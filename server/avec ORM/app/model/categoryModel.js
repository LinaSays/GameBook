const Sequelize = require('sequelize');

const Story = sequelize.define('story')

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
    const query = `SELECT * FROM category WHERE id=${req.params.id}`;

    // execute query
    db.query(query, (err, result) => {
      if (err) throw err;
      res.send(result);
    });
  },
};
