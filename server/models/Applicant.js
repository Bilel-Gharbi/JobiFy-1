const { DataTypes } = require("sequelize");
const db = require("../loaders/dataBase");

//jobOffer has many Skills

const Applicant = db.define("Applicant", {
  status: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: "pending"
  }
});

module.exports = Applicant;
