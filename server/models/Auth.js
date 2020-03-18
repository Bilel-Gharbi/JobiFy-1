const { DataTypes } = require("sequelize");
const db = require("../loaders/dataBase");

const Auth = db.define("Auth", {
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: "password"
  },
  active: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
    defaultValue: false
  },
  token: {
    type: DataTypes.STRING,
    allowNull: true,
    defaultValue: "token here"
  },
  type: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = Auth;
