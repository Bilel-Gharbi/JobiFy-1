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

module.exports = {
  userOperations,
  resumeOperations,
  experienceOperations,
  educationOperations,
  projectOperations,
  certificateOperations,
  awardOperations,
  languageOperations,
  interestOperations
};
