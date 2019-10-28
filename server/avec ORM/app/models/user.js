const Sequelize = require('sequelize');
const { sequelize } = require('../../db');

const User = sequelize.define('user', {
  id: {
    type: Sequelize.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
  },
  name: Sequelize.STRING(255),
  email: Sequelize.STRING(255),
  password: Sequelize.STRING(64),
  avatar: {
    type: Sequelize.STRING(128),
    allowNull: true,
  },
  roleId: {
    type: Sequelize.INTEGER.UNSIGNED,
    field: 'role_id',
  },
  createdAt: Sequelize.DATE,
  updatedAt: Sequelize.DATE,
});

module.exports = {
  User,
};
