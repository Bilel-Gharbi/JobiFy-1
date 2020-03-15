const { DataTypes } = require("sequelize");
const db = require("../loaders/dataBase");

//one resume has many langauge
const Language = db.define("Language", {
  // Model attributes are defined here
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  level: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = Language;
