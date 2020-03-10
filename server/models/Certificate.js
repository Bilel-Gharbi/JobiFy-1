const { DataTypes } = require("sequelize");
const db = require("../loaders/dataBase");

//one resume has many awards
const Certificate = db.define("Certificate", {
  name: {
    type: DataTypes.STRING,
    allowNull: true
  },
  date: {
    type: DataTypes.DATE,
    allowNull: true
  },
  organization: {
    type: DataTypes.STRING,
    allowNull: true
  }
});

module.exports = Certificate;
