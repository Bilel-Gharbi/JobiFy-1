//import Resume model from models/index.js file
const { Resume, Experience } = require("../models");

//done
const addResumeExperience = async (data, id) => {
  try {
    await Experience.sync({ force: false });
    let resume = await Resume.findByPk(id);
    let newExperience = await resume.createExperience({ ...data });
    return newExperience;
  } catch (err) {
    console.log("ExperienceService /addResumeExperience Eroor ", err);
  }
};
const addResumeManyExperiences = async (data, id) => {
  console.log(...data);
  try {
    await Experience.sync({ force: false });

    let newExperiences = await Experience.bulkCreate(data);
    //let newExperience = await resume.createExperience({ data });
    return newExperiences;
  } catch (err) {
    console.log("ExperienceService /addResumeManyExperiences Eroor ", err);
  }
};
//done
const getResumeExperience = async id => {
  try {
    let resume = await Resume.findByPk(id);
    let allExperieces = await resume.getExperiences();
    return allExperieces;
  } catch (err) {
    console.log("ExperienceService /getResumeExperience Eroor ", err);
  }
};

//done
const deleteResumeExperience = async idExperience => {
  try {
    let experience = await Experience.findByPk(idExperience);
    experienceToDelete = await experience.destroy();
    return experienceToDelete;
  } catch (err) {
    console.log("ExperienceService /deleteResumeExperience Eroor ", err);
  }
};

//done
const updateResumeExperience = async (idExperience, data) => {
  try {
    let experience = await Experience.findByPk(idExperience);
    newExperience = await experience.update({ ...data });
    return newExperience;
  } catch (err) {
    console.log("ExperienceService /updateResumeExperience Eroor ", err);
  }
};
module.exports = {
  addResumeExperience,
  getResumeExperience,
  addResumeManyExperiences,
  deleteResumeExperience,
  updateResumeExperience
};
