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

//done
const addResumeExperience = async (data, id) => {
  try {
    await Experience.sync({ force: false });
    let resume = await Resume.findByPk(id);
    let newExperience = await resume.createExperience({ ...data });
    return newExperience;
  } catch (err) {
    console.log("ResumeService /addResumeExperience Eroor ", err);
  }
};
const getResumeExperience = async id => {
  try {
    let resume = await Resume.findByPk(id);
    let allExperieces = await resume.getExperiences();
    return allExperieces;
  } catch (err) {
    console.log("ResumeService /getResumeExperience Eroor ", err);
  }
};

//TODO:
const deleteResumeExperience = async idExperience => {
  try {
    let experience = await Experience.findByPk(idExperience);
    experienceToDelete = await experience.destroy();
    return experienceToDelete;
  } catch (err) {
    console.log("ResumeService /deleteResumeExperience Eroor ", err);
  }
};

//TODO:
const updateResumeExperience = async id => {
  try {
    let resume = await Resume.findByPk(id);
    //console.log(resume.)
  } catch (err) {
    console.log("ResumeService /updateResumeExperience Eroor ", err);
  }
};
module.exports = {
  createResume,
  getAllResume,
  getUserResumeDetails,
  addResumeExperience,
  getResumeExperience,
  deleteResumeExperience,
  updateResumeExperience
};
