/*
    index.js service file includes all the service 
    example : userService , productService, companyService 
 */

const userServices = require("./user");
const resumeServices = require("./resume");
const experienceServices = require("./experience");
const educationServices = require("./education");
const projectServices = require("./project");

module.exports = {
  userServices,
  resumeServices,
  experienceServices,
  educationServices,
  projectServices
};
