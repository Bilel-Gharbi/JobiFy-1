const { DataTypes } = require("sequelize");
const db = require("../loaders/dataBase");

//user has one resume

const User = db.define("User", {
  active: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: true
    //defaultValue: "USER Name"
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: true
    //defaultValue: "user lastName"
  },
  birthDate: {
    type: DataTypes.DATE,
    allowNull: true
    //defaultValue: new Date()
  },
  phoneNumber: {
    type: DataTypes.STRING,
    allowNull: true
    // defaultValue: "00000000"
  },
  location: {
    type: DataTypes.STRING,
    allowNull: true
    //defaultValue: "anywhere"
  },
  photo: {
    type: DataTypes.STRING,
    defaultValue: "https://via.placeholder.com/600/92c952"
  }
});

module.exports = User;
