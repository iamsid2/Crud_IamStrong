"use strict";

var fs = require("fs");
var path = require("path");
var Sequelize = require("sequelize");
var basename = path.basename(module.filename);
var db = {};

// connecting sequelize
var sequelize = new Sequelize("crud", "root", "tiger123", {
  host: "localhost",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

fs.readdirSync(__dirname)
  .filter(function(file) {
    return (
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    );
  })
  .forEach(function(file) {
    var model = sequelize["import"](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(function(modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;

module.exports = db;
