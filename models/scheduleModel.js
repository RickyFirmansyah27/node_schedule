const { DataTypes } = require('sequelize');
const { db } = require('../config/database');

const LatihanScheduler = db.define('LatihanScheduler', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  waktu_sekarang: {
    type: DataTypes.DATE,
    allowNull: false
  }
}, {
  tableName: 'latihan_scheduler',
  timestamps: false
});

module.exports = LatihanScheduler;
