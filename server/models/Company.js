const { DataTypes } = require("sequelize");
const db = require("../loaders/dataBase");

//user has one resume

const Company = db.define("Company", {
  companyName: {
    type: DataTypes.STRING,
    allowNull: true
    //defaultValue: "company name"
  },
  companyDescription: {
    type: DataTypes.STRING,
    allowNull: true
    //defaultValue: "company description"
  },
  active: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  type: {
    type: DataTypes.STRING,
    allowNull: true
  },
  creationDate: {
    type: DataTypes.DATE,
    allowNull: true
    //defaultValue: new Date()
  },
  phoneNumber: {
    type: DataTypes.STRING,
    allowNull: true
    //defaultValue: "00000000"
  },
  location: {
    type: DataTypes.STRING,
    allowNull: true
    //defaultValue: "anywhere"
  },
  logo: {
    type: DataTypes.STRING,
    defaultValue: "https://via.placeholder.com/600/92c952"
  }
});

module.exports = Company;
