const { DataTypes } = require("sequelize");
const db = require("../loaders/dataBase");

//one resume has many awards
const Project = db.define("Project", {
  // Model attributes are defined here
  name: {
    type: DataTypes.STRING,
    allowNull: true
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true
  },
  technologies: {
    type: DataTypes.STRING,
    allowNull: true
  },
  link: {
    type: DataTypes.STRING,
    allowNull: true
  }
});

module.exports = Project;
