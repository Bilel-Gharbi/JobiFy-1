const { DataTypes } = require("sequelize");
const db = require("../loaders/dataBase");

//one resume has many awards
const Award = db.define("Award", {
  // Model attributes are defined here
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false
  }
});

module.exports = Award;
