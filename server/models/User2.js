const { Sequelize, DataTypes } = require("sequelize");
const db = require("../loaders/dataBase");

//user has one resume
const User2 = db.define(
  "User2",
  {
    // Model attributes are defined here
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    active: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    phoneNumber: {
      type: DataTypes.STRING
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false
    },
    birthDate: {
      type: DataTypes.DATE
    },
    photo: {
      type: DataTypes.STRING,
      defaultValue: "https://via.placeholder.com/600/92c952"
    }
  },
  {
    // Other model options go here
  }
);

module.exports = User2;
