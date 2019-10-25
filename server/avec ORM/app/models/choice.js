const Sequelize = require('sequelize');
const { sequelize } = require('../../db');

const Choice = sequelize.define('choice', {
  id: {
    type: Sequelize.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
  },
  text: Sequelize.TEXT,
  idSituationParent: {
    type: Sequelize.INTEGER.UNSIGNED,
    field: 'id_situation_parent',
  },
  idSituationChild: {
    type: Sequelize.INTEGER.UNSIGNED,
    allowNull: true,
    field: 'id_situation_child',
  },
  createdAt: Sequelize.DATE,
  updatedAt: Sequelize.DATE,
});


module.exports = {
  Choice,
};
