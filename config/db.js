const { Sequelize } = require('sequelize');

module.exports.db = new Sequelize('mydb', 'postgres', 'magus-malawi-gush', {
  host: 'localhost',
  dialect: 'postgres',
  port: 5000
});
