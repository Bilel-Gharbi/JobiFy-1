//import Resume model from models/index.js file
const {
  Resume,
  Project,
  Award,
  Certificate,
  Interest,
  Skill,
  Experience,
  Education,
  Language
} = require("../models");

const getAllResume = async () => {
  try {
    let result = await Resume.findAll();
    return result;
  } catch (err) {
    console.log("ResumeService/getAllResume Error ", err);
  }
};

//Done
const getUserResumeDetails = async userId => {
  try {
    let userResume = await Resume.findOne({ where: { UserId: userId } });
    if (!userResume) return `no resume with this id ${userId}`;

    //in case 0 we need to create all the table
    /* 
    await Project.sync({ force: false });
    await Award.sync({ force: false });
    await Certificate.sync({ force: false });
    await Interest.sync({ force: false });
    await Skill.sync({ force: false });
    await Experience.sync({ force: false });
    await Education.sync({ force: false });
    await Language.sync({ force: false }); */

    let experiences = await userResume.getExperiences();
    let educations = await userResume.getEducation();
    let projects = await userResume.getProjects();
    let awards = await userResume.getAwards();
    let certificates = await userResume.getCertificates();
    let skills = await userResume.getSkills();
    let interests = await userResume.getInterests();
    let languages = await userResume.getLanguages();

    let result = {
      userResume,
      experiences,
      educations,
      skills,
      certificates,
      projects,
      languages,
      awards,
      interests
    };

    return result;
  } catch (err) {
    console.log("ResumeService /getUserResumeDetails Eroor ", err);
  }
};

module.exports = {
  getAllResume,
  getUserResumeDetails
};
