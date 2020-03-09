//import Resume model from models/index.js file
const { Resume, Experience } = require("../models");

const createResume = async (data, userId) => {
  const { summary, expertiseLevel, UserId } = data;
  try {
    await Resume.sync({ force: false });
    // Table created
    return Resume.create({
      summary,
      expertiseLevel,
      UserId
    });
  } catch (err) {
    console.log("ResumeService/createResume Error ", err);
  }
};

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

const addResumeExperience = async (data, id) => {
  try {
    await Experience.sync({ force: true });
    let resume = await Resume.findByPk(id);
    let newExperience = await resume.createExperience({ ...data });
    return newExperience;
  } catch (err) {
    console.log("ResumeService /addResumeExperience Eroor ", err);
  }
};
module.exports = {
  createResume,
  getAllResume,
  getUserResumeDetails,
  addResumeExperience
};
