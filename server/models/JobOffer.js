const { DataTypes } = require("sequelize");
const db = require("../loaders/dataBase");

//jobOffer has many Skills

const JobOffer = db.define("JobOffer", {
  jobPosition: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: "Job position"
  },
  jobDescription: {
    type: DataTypes.TEXT,
    allowNull: false,
    defaultValue: "Job description "
  },
  JobContractType: {
    type: DataTypes.STRING,
    allowNull: true,
    defaultValue: "CDI"
  },
  jobMinSalary: {
    type: DataTypes.INTEGER,
    allowNull: true,
    defaultValue: 0
  },
  jobMaxSalary: {
    type: DataTypes.INTEGER,
    allowNull: true,
    defaultValue: 0
  },
  jobExpirationDate: {
    type: DataTypes.DATE,
    allowNull: false
  },
  sponsored: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
    defaultValue: false
  }
});

module.exports = JobOffer;
