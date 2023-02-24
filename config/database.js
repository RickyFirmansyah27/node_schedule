const { Sequelize } = require('sequelize');

const db = new Sequelize('db_schedule', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = { db };
