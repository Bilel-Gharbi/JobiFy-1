//import Resume model from models/index.js file
const { Resume, Experience } = require("../models");

const getAllResume = async () => {
  try {
    let result = await Resume.findAll();
    return result;
  } catch (err) {
    console.log("ResumeService/getAllResume Error ", err);
  }
};

//TODO:
const getUserResumeDetails = async userId => {
  console.log("service resume", userId);
  let result = {};
  try {
    let userResume = await Resume.findOne({ where: { UserId: userId } });
    //console.log(userResume);
    //let exp = userResume.hasExperience();
    result.experience = "exp";
    console.log(result);
    return userResume;
  } catch (err) {
    console.log("ResumeService /getUserResumeDetails Eroor ", err);
  }
};

module.exports = {
  getAllResume,
  getUserResumeDetails
};
