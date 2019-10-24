const Sequelize = require('sequelize');
const { sequelize } = require('../../db');

const Role = sequelize.define('role', {
  id: {
    type: Sequelize.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
  },
  name: Sequelize.STRING(255),
  timestamps: false,
});

module.exports = {
  Role,
};
