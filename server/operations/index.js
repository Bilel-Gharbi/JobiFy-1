/*
    operation/index.js contain all the operation 
 */
const userOperations = require("./user");
const resumeOperations = require("./resume");
const experienceOperations = require("./experience");
const educationOperations = require("./education");
const projectOperations = require("./project");
const certificateOperations = require("./certificate");
const awardOperations = require("./award");
const languageOperations = require("./language");
const interestOperations = require("./interest");
const skillOperations = require("./skill");

//company
const companyOperations = require("./company");
const jobOfferOperations = require("./jobOffer");

//auth
const authOperations = require("./auth");

module.exports = {
  authOperations,
  userOperations,
  resumeOperations,
  experienceOperations,
  educationOperations,
  projectOperations,
  certificateOperations,
  awardOperations,
  languageOperations,
  interestOperations,
  skillOperations,
  companyOperations,
  jobOfferOperations
};
