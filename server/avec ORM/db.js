const Sequelize = require('sequelize');

const sequelize = new Sequelize('aventure', 'aventure', 'aventure_cypok', {
  host: 'localhost',
  dialect: 'mysql',
  define: {
    underscored: true,
    freezeTableName: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
});

module.exports = {
  sequelize,
};
