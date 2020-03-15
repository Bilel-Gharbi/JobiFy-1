//import Resume model from models/index.js file
const { Resume, Education } = require("../models");

//done
const addResumeEducation = async (data, id) => {
  try {
    await Education.sync({ force: false });
    let resume = await Resume.findByPk(id);
    let newEducation = await resume.createEducation({ ...data });
    return newEducation;
  } catch (err) {
    console.log("EducationService /addResumeEducation Eroor ", err);
  }
};

//done
const addResumeManyEducations = async (data, id) => {
  try {
    await Education.sync({ force: false });
    let newEducations = await Education.bulkCreate(data);
    return newEducations;
  } catch (err) {
    console.log("EducationService /addResumeManyEducations Eroor ", err);
  }
};
//done
const getResumeEducations = async id => {
  try {
    let resume = await Resume.findByPk(id);
    let allEducations = await resume.getEducation();
    return allEducations;
  } catch (err) {
    console.log("EducationService /getResumeEducation Eroor ", err);
  }
};

//done
const deleteResumeEducation = async (id, idEducation) => {
  try {
    let education = await Education.findByPk(idEducation);
    if (!education) {
      return `no education with id = ${idEducation}`;
    }
    //check the resume id before destroy row
    if (education.ResumeId == id) {
      educationToDelete = await education.destroy();
      return educationToDelete;
    }
    return `invalid id this resume do not containe education with ${idEducation} `;
  } catch (err) {
    console.log("EducationService /deleteResumeEducation Eroor ", err);
  }
};

//done
const updateResumeEducation = async (idEducation, data) => {
  try {
    let education = await Education.findByPk(idEducation);
    if (!education) {
      return `no education with id = ${idEducation}`;
    }
    newEducation = await education.update({ ...data });
    return newEducation;
  } catch (err) {
    console.log("EducationService /updateResumeEducation Eroor ", err);
  }
};

module.exports = {
  addResumeEducation,
  getResumeEducations,
  addResumeManyEducations,
  deleteResumeEducation,
  updateResumeEducation
};
