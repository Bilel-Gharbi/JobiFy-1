const { DataTypes } = require("sequelize");
const db = require("../loaders/dataBase");

//one resume has many Interst
const Interest = db.define("Interest", {
  // Model attributes are defined here
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = Interest;
