const { DataTypes } = require("sequelize");
const db = require("../loaders/dataBase");

const Experience = db.define("Experience", {
  // Model attributes are defined here
  startDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  endDate: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  //it can be current position
  current: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
  companyName: {
    type: DataTypes.STRING,
    allowNull: true,
    defaultValue: "comapny name default",
  },
  position: {
    type: DataTypes.STRING,
    allowNull: true,
    defaultValue: "position name default",
  },
  task: {
    type: DataTypes.STRING,
    allowNull: true,
    defaultValue: "task name default",
  },
});

module.exports = Experience;
