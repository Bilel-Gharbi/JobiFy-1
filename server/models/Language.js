const { Sequelize, DataTypes } = require("sequelize");
const db = require("../loaders/dataBase");

//one resume has many langauge
const Language = db.define(
  "Language",
  {
    // Model attributes are defined here
    langaugeName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    langaugeLevel: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    // Other model options go here
  }
);

module.exports = Language;
