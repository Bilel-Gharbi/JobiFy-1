const { experienceServices } = require("../services");

//done
const getExperiences = async id => {
  try {
    result = await experienceServices.getResumeExperiences(id);
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

//add many experiences
const addManyExperiences = async (data, id) => {
  //ad the Resume id into the experience
  //check the current position of the user if there is no endDate that mean the user is on this position
  data.map(el => {
    el.ResumeId = id;
    !el.endDate ? (el.current = true) : (el.current = false);
  });

  try {
    result = await experienceServices.addResumeManyExperiences(data, id);
    return result;
  } catch (err) {
    console.log("addManyExperience/ ExperienceOperation error ", err);
  }
};

//done
const deleteExperience = async (id, idExperience) => {
  try {
    result = await experienceServices.deleteResumeExperience(id, idExperience);
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
  addManyExperiences,
  deleteExperience,
  updateExperience
};
