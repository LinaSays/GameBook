const Sequelize = require('sequelize');

const sequelize = new Sequelize('aventure', 'aventure', 'aventure_cypok', {
  host: 'localhost',
  dialect: 'mysql',
  define: {
    underscored: true,
    freezeTableName: true,
    timestamps: false,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
});

module.exports = {
  sequelize,
};
