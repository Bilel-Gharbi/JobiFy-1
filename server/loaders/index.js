const expressLoader = require("./express");
const dataBaseLoader = require("./dataBase");

module.exports = async app => {
  try {
    await expressLoader(app);
    console.log("Experss App Intialized");
  } catch (err) {
    console.log(err);
  }
  try {
    await dataBaseLoader.authenticate();
    console.log("Connection has been established successfully.");
  } catch (err) {
    console.error("Unable to connect to the database:", err);
  }
};
