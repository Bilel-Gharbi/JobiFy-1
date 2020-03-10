//import all controllers here
const userControllers = require("./user");
const resumeControllers = require("./resume");
const experienceControllers = require("./experience");
const educationControllers = require("./education");
const projectControllers = require("./project");

//export one obj contains all controllers

module.exports = {
  userControllers,
  resumeControllers,
  experienceControllers,
  educationControllers,
  projectControllers
};
