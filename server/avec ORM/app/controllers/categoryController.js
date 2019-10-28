const { sequelize, Role } = require('../../connection');

module.exports = {
  getDemoStories: (req, res) => {
    Role.findAll({
      attributes: ['id', 'name'],
    });
  },
};
