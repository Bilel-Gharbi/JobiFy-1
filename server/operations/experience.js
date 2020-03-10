const { experienceServices } = require("../services");

//done
const getExperiences = async id => {
  try {
    result = await experienceServices.getResumeExperience(id);
    return result;
  } catch (err) {
    console.log("getExperiences/ ExperienceOperation error ", err);
  }
};
//done
const addExperience = async (data, id) => {
  //check if user's in position or note
  !data.endDate ? (data.current = true) : (data.current = false);
  try {
    result = await experienceServices.addResumeExperience(data, id);
    return result;
  } catch (err) {
    console.log("addExperience/ ExperienceOperation error ", err);
  }
};

//done
const deleteExperience = async idExperience => {
  try {
    result = await experienceServices.deleteResumeExperience(idExperience);
    return result;
  } catch (err) {
    console.log("deleteExperience / ExperienceOperation error ", err);
  }
};
//done
const updateExperience = async (idExperience, data) => {
  try {
    result = await experienceServices.updateResumeExperience(
      idExperience,
      data
    );
    return result;
  } catch (err) {
    console.log("updateExperience / ExperienceOperation error ", err);
  }
};

module.exports = {
  getExperiences,
  addExperience,
  deleteExperience,
  updateExperience
};
