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

const deleteSkill = async (id, idSkill) => {
  try {
    let skill = await Skill.findByPk(idSkill);
    if (!skill) {
      return `no Skill with id = ${idSkill}`;
    }
    if (skill.ResumeId == id || skill.JobOfferId == id) {
      skillToDelete = await skill.destroy();
      return skillToDelete;
    }
    return `invalid id this resume or Job  do not containe skill with id = ${idSkill} `;
  } catch (err) {
    console.log("SkillService /deleteSkill Eroor ", err);
  }
};

const updateSkill = async (idSkill, data) => {
  try {
    let skill = await Skill.findByPk(idSkill);

    if (!skill) {
      return `no skill with id = ${idSkill}`;
    }
    newSkill = await skill.update({ ...data });
    return newSkill;
  } catch (err) {
    console.log("InterestService /updateSkill Eroor ", err);
  }
};

module.exports = {
  addResumeSkill,
  getResumeSkills,
  addResumeManySkills,
  deleteSkill,
  updateSkill
};
