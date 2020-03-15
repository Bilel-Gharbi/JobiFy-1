/*
    index.js service file includes all the service 
    example : userService , productService, companyService 
 */

const userServices = require("./user");
const resumeServices = require("./resume");
const experienceServices = require("./experience");
const educationServices = require("./education");
const projectServices = require("./project");
const certificateServices = require("./certificate");
const awardServices = require("./award");
const languageServices = require("./language");
const interestServices = require("./interst");

module.exports = {
  userServices,
  resumeServices,
  experienceServices,
  educationServices,
  projectServices,
  certificateServices,
  awardServices,
  languageServices,
  interestServices
};
