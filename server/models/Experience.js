const { Sequelize, DataTypes } = require("sequelize");
const db = require("../loaders/dataBase");

const Experience = db.define(
  "Experience",
  {
    // Model attributes are defined here
    startDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    endDate: {
      type: DataTypes.DATE,
      //it can be current position
      allowNull: false
    },
    comapanyName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    position: {
      type: DataTypes.STRING,
      allowNull: false
    },
    task: {
      type: DataTypes.STRING,
      allowNull: true
    }
  },
  {
    // Other model options go here
  }
);

module.exports = Experience;
