const { Sequelize, DataTypes } = require("sequelize");
const db = require("../loaders/dataBase");

//one resume has many awards
const Award = db.define(
  "Award",
  {
    // Model attributes are defined here
    awardName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    awardDescription: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    // Other model options go here
  }
);

module.exports = Award;
