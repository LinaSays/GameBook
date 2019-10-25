const Sequelize = require('sequelize');
const { sequelize } = require('../../db');

const Category = sequelize.define('category', {
  id: {
    type: Sequelize.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
  },
  name: Sequelize.STRING(255),
  image: {
    type: Sequelize.STRING(128),
    allowNull: true,
  },
  description: Sequelize.TEXT('tiny'),
});


module.exports = {
  Category,
};
