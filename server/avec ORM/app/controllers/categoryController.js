const { sequelize, Role } = require('../../connection');

module.exports = {
  getDemoStories: (req, res) => {
    Role.sequelize.findAll({
      attributes: ['id', 'name'],
    });
  },
};
