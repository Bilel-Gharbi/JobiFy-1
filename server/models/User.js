const { Sequelize, DataTypes } = require("sequelize");
const db = require("../loaders/dataBase");

const User = db.define(
  "User",
  {
    // Model attributes are defined here
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING
      // allowNull defaults to true
    }
  },
  {
    // Other model options go here
  }
);

module.exports = User;
