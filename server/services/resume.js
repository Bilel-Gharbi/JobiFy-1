//import Resume model from models/index.js file
const {
  Resume,
  Applicant,
  Project,
  Award,
  Certificate,
  Interest,
  Skill,
  Experience,
  Education,
  Language,
  User,
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
const getUserResumeDetails = async (userId) => {
  try {
    let user = await User.findByPk(userId);
    let userResume = await Resume.findOne({ where: { UserId: userId } });
    //if (!userResume) return `no resume with this id ${userId}`;

    // console.log("hello ", applyedJob);
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

    let applyedJob = await userResume.getApplicants();
    let experiences = await userResume.getExperiences();
    let educations = await userResume.getEducation();
    let projects = await userResume.getProjects();
    let awards = await userResume.getAwards();
    let certificates = await userResume.getCertificates();
    let skills = await userResume.getSkills();
    let interests = await userResume.getInterests();
    let languages = await userResume.getLanguages();

    let resume = {
      userResume,
      experiences,
      educations,
      skills,
      certificates,
      projects,
      languages,
      awards,
      interests,
      applyedJob,
    };
    return { user, resume };
  } catch (err) {
    console.log("ResumeService /getUserResumeDetails Eroor ", err);
  }
};
const getResumeDetailsForApplication = async (id) => {
  try {
    let userResume = await Resume.findByPk(id);
    //if (!userResume) return `no resume with this id ${userId}`;

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

    let resumeCandidate = {
      userResume,
      experiences,
      educations,
      skills,
      certificates,
      projects,
      languages,
      awards,
      interests,
    };
    return resumeCandidate;
  } catch (err) {
    console.log("ResumeService /getUserResumeDetails Eroor ", err);
  }
};
//add resume info
const addBasicResumeInfo = async (resumeId, data) => {
  try {
    let resume = await Resume.findByPk(resumeId);
    let updatedResume = await resume.update({ ...data });
    return updatedResume;
  } catch (err) {
    console.log("ResumeService /addBasicResumeInfo Eroor ", err);
  }
};

//apply to job
const applyToJobOffer = async (ResumeId, JobOfferId) => {
  try {
    //check befor applying
    let applyed = await Applicant.findOne({
      where: { ResumeId, JobOfferId },
    });
    if (!applyed) {
      //add to table
      let newJobApplied = await Applicant.create({ ResumeId, JobOfferId });
      return newJobApplied;
    }
    return null;
  } catch (err) {
    console.log("ResumeService /applyToJobOffer Eroor ", err);
  }
};

module.exports = {
  getAllResume,
  getUserResumeDetails,
  applyToJobOffer,
  addBasicResumeInfo,
  getResumeDetailsForApplication,
};
