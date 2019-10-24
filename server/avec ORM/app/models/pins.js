const Sequelize = require('sequelize');
const { sequelize } = require('../../db');

const Pins = sequelize.define('pins', {
  id: {
    type: Sequelize.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
  },
  name: Sequelize.STRING(255),
  image: Sequelize.STRING(128),
  timestamps: false,
});


module.exports = {
  Pins,
};
