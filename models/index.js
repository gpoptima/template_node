const { Sequelize, DataTypes } = require('sequelize');
const fs = require('fs');
const path = require('path');
const config = require('../config/config.json');

const sequelize = new  Sequelize(
        config[config.mode].database,
        config[config.mode].username,
        config[config.mode].password,
        {
        host: config[config.mode].host,
        dialect: config[config.mode].dialect,
        dialectOptions: {
            timezone: process.env.db_timezone
        },
        pool: {
            max: 5,
            min: 0,
            idle: 10000
        },
        define: {
            timestamps: false
        },
        benchmark: false,
        logging: config[config.mode].debug?console.log:false
    })

let db = {};

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== 'index.js') && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;

module.exports = db;
