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
    console.log("addInterest / interestOperations error ", err);
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
    console.log("addManySkills/ interestOperations error ", err);
  }
};

const deleteInterest = async (id, idInterst) => {
  try {
    result = await interestServices.deleteResumeInterest(id, idInterst);
    return result;
  } catch (err) {
    console.log("deleteInterest / interestOperations error ", err);
  }
};

const updateInterest = async (idInterst, data) => {
  try {
    result = await interestServices.updateResumeInterest(idInterst, data);
    return result;
  } catch (err) {
    console.log("updateAward / interestOperations error ", err);
  }
};

module.exports = {
  getSkills,
  addSkill,
  addManySkills,
  deleteInterest,
  updateInterest
};
