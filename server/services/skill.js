//import Resume model from models/index.js file
const { Resume, Skill } = require("../models");

//done
const addResumeSkill = async (data, id) => {
  try {
    let resume = await Resume.findByPk(id);
    await Skill.sync({ force: false });
    let newSkill = await resume.createSkill({ ...data });
    return newSkill;
  } catch (err) {
    console.log("SkillService /addResumeInterest Eroor ", err);
  }
};
const addResumeManySkills = async data => {
  try {
    await Skill.sync({ force: false });
    let newSkills = await Skill.bulkCreate(data);
    return newSkills;
  } catch (err) {
    console.log("SkillService /addResumeManySkills Eroor ", err);
  }
};
//done
const getResumeSkills = async id => {
  try {
    let resume = await Resume.findByPk(id);
    let allSkills = await resume.getSkills();
    return allSkills;
  } catch (err) {
    console.log("SkillService /getResumeInterests Eroor ", err);
  }
};

const deleteResumeInterest = async (id, idInterest) => {
  try {
    let interest = await Interest.findByPk(idInterest);
    if (!interest) {
      return `no Award with id = ${idInterest}`;
    }
    if (interest.ResumeId == id) {
      interestToDelete = await interest.destroy();
      return interestToDelete;
    }
    return `invalid id this resume do not containe Interest with id = ${idInterest} `;
  } catch (err) {
    console.log("InterestService /deleteResumeInterest Eroor ", err);
  }
};

const updateResumeInterest = async (idInterest, data) => {
  try {
    let interest = await Interest.findByPk(idInterest);

    if (!interest) {
      return `no Interest with id = ${idInterest}`;
    }
    newInterest = await interest.update({ ...data });
    return newInterest;
  } catch (err) {
    console.log("InterestService /updateResumeInterest Eroor ", err);
  }
};
module.exports = {
  addResumeSkill,
  getResumeSkills,
  addResumeManySkills,
  deleteResumeInterest,
  updateResumeInterest
};
