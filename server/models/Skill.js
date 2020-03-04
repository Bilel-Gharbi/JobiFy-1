const { Sequelize, DataTypes } = require("sequelize");
const db = require("../loaders/dataBase");

//Skill has one resume
//skill can has one job_offer
const Skill = db.define(
  "Skill",
  {
    // Model attributes are defined here
    skillName: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    // Other model options go here
  }
);

module.exports = Skill;
