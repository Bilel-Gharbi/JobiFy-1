// database laoder
const { Sequelize } = require("sequelize");

const {
  datbaseUserName,
  databasePwd,
  datbaseURL,
  datbaseName
} = require("../config");

let db = new Sequelize(datbaseName, datbaseUserName, databasePwd, {
  host: datbaseURL,
  dialect: "mysql",

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
  //operatorsAliases: false
});

module.exports = db;
