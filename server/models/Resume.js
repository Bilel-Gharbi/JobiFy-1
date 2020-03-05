const { Sequelize, DataTypes } = require("sequelize");
const db = require("../loaders/dataBase");
const { User } = require("./index");

//id user
// one user has one resume
// one resume has many experience , education , language, language , skills ,
//adward , interest

const Resume = db.define("Resume", {
  // Model attributes are defined here
  summary: {
    type: DataTypes.STRING,
    allowNull: true
  },
  expertiseLevel: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

//Resume.belongTo(User);
module.exports = Resume;
