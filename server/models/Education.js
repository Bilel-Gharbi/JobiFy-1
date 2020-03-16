const { DataTypes } = require("sequelize");
const db = require("../loaders/dataBase");

const Education = db.define("Education", {
  startDate: {
    type: DataTypes.DATE,
    allowNull: false
  },
  endDate: {
    type: DataTypes.DATE,
    allowNull: false
  },
  establishment: {
    type: DataTypes.STRING,
    allowNull: false
  },
  diplomaMajor: {
    type: DataTypes.STRING,
    allowNull: false
  },
  diplomaType: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true
  }
});

module.exports = Education;
