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
const interestServices = require("./interest");
const skillServices = require("./skill");

// company service
const companyServices = require("./company");
const jobOfferServices = require("./jobOffer");

//auth
const authServices = require("./auth");

module.exports = {
  authServices,
  userServices,
  resumeServices,
  experienceServices,
  educationServices,
  projectServices,
  certificateServices,
  awardServices,
  languageServices,
  interestServices,
  skillServices,
  companyServices,
  jobOfferServices
};
