const Sequelize = require('sequelize');
const { sequelize } = require('../../db');

const Situation = sequelize.define('situation', {
  id: {
    type: Sequelize.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
  },
  storyId: {
    type: Sequelize.INTEGER.UNSIGNED,
    field: 'story_id',
  },
  text: Sequelize.TEXT,
  recap: Sequelize.STRING(255),
  image: {
    type: Sequelize.STRING(128),
    allowNull: true,
  },
  color: {
    type: Sequelize.STRING(7),
    allowNull: true,
  },
  createdAt: Sequelize.DATE,
  updatedAt: Sequelize.DATE,
});


module.exports = {
  Situation,
};
