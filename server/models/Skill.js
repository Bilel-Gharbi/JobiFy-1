const { DataTypes } = require("sequelize");
const db = require("../loaders/dataBase");

//Skill has one resume
//skill can has one job_offer
const Skill = db.define("Skill", {
  // Model attributes are defined here
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  level: {
    type: DataTypes.STRING,
    allowNull: true
  }
});

module.exports = Skill;
