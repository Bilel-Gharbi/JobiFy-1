//import all controllers here
const userControllers = require("./user");
const resumeControllers = require("./resume");
const experienceControllers = require("./experience");

//export one obj contains all controllers

module.exports = {
  userControllers,
  resumeControllers,
  experienceControllers
};
