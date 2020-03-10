/*
    index.js service file includes all the service 
    example : userService , productService, companyService 
 */

const userServices = require("./user");
const resumeServices = require("./resume");
const experienceServices = require("./experience");

module.exports = {
  userServices,
  resumeServices,
  experienceServices
};
