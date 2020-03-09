const { resumeServices } = require("../services");

const createNewResume = async (data, userId) => {
  try {
    result = await resumeServices.createResume(data);
    return result;
  } catch (err) {
    console.log("createNewResume operation error ", err);
  }
};

const getAllResume = async () => {
  try {
    result = await resumeServices.getAllResume();
    return result;
  } catch (err) {
    console.log("getAllResume /Resume operation error ", err);
  }
};

const getUserResumeDetails = async userId => {
  try {
    result = await resumeServices.getUserResumeDetails(userId);

    return result;
  } catch (err) {
    console.log("getUserResumeDetails/ Resume operation error ", err);
  }
};

const addExperience = async (data, id) => {
  //check if user's in position or note
  !data.endDate ? (data.current = true) : (data.current = false);
  try {
    result = await resumeServices.addResumeExperience(data, id);
    return result;
  } catch (err) {
    console.log("addExperience/ Resume operation error ", err);
  }
};

module.exports = {
  createNewResume,
  getAllResume,
  getUserResumeDetails,
  addExperience
};
