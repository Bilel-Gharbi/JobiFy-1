const { DataTypes } = require("sequelize");
const db = require("../loaders/dataBase");

// one user has one resume
// one resume has many experience , education , language, language , skills ,
//adward , interest

const Resume = db.define("Resume", {
  // Model attributes are defined here
  summary: {
    type: DataTypes.STRING,
    allowNull: true,
    defaultValue: "this my summary"
  },
  expertiseLevel: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: "Junior"
  }
});

module.exports = Resume;
