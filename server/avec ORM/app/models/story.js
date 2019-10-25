const Sequelize = require('sequelize');
const { sequelize } = require('../../db');

const Story = sequelize.define('story', {
  id: {
    type: Sequelize.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
  },
  title: Sequelize.STRING(255),
  description: Sequelize.TEXT('tiny'),
  image: {
    type: Sequelize.STRING(255),
    allowNull: true,
  },
  published: Sequelize.BOOLEAN,
  authorId: {
    type: Sequelize.INTEGER.UNSIGNED,
    field: 'author_id',
  },
  createdAt: Sequelize.DATE,
  updatedAt: Sequelize.DATE,
});


module.exports = {
  Story,
};
