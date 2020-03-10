/*
    operation/index.js contain all the operation 
 */
const userOperations = require("./user");
const resumeOperations = require("./resume");
const experienceOperations = require("./experience");
const educationOperations = require("./education");

module.exports = {
  userOperations,
  resumeOperations,
  experienceOperations,
  educationOperations
};
