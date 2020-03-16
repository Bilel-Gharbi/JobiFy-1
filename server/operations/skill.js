const { skillServices } = require("../services");

//done
const getSkills = async id => {
  try {
    result = await skillServices.getResumeSkills(id);
    return result;
  } catch (err) {
    console.log("getSkills / SkillOperations error ", err);
  }
};
//done
const addSkill = async (data, id) => {
  try {
    result = await skillServices.addResumeSkill(data, id);
    return result;
  } catch (err) {
    console.log("addInterest / SkillOperations error ", err);
  }
};

//done
const addManySkills = async (data, id) => {
  //aad the Resume id into the project
  data.map(el => {
    el.ResumeId = id;
  });

  try {
    result = await skillServices.addResumeManySkills(data, id);
    return result;
  } catch (err) {
    console.log("addManySkills/ SkillOperations error ", err);
  }
};

const deleteSkill = async (id, idJobOffer, idSkill) => {
  try {
    result = await skillServices.deleteSkill(id, idJobOffer, idSkill);
    return result;
  } catch (err) {
    console.log("deleteSkill / SkillOperations error ", err);
  }
};

//done
const updateSkill = async (idSkill, data) => {
  try {
    result = await skillServices.updateSkill(idSkill, data);
    return result;
  } catch (err) {
    console.log("updateSkill / SkillOperations error ", err);
  }
};

module.exports = {
  getSkills,
  addSkill,
  addManySkills,
  deleteSkill,
  updateSkill
};
