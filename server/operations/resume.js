const { resumeServices } = require("../services");

//done
const getAllResume = async () => {
  try {
    result = await resumeServices.getAllResume();
    return result;
  } catch (err) {
    console.log("getAllResume /Resume operation error ", err);
  }
};

const getUserResumeDetails = async (userId) => {
  try {
    result = await resumeServices.getUserResumeDetails(userId);

    return result;
  } catch (err) {
    console.log("getUserResumeDetails/ Resume operation error ", err);
  }
};

const getResumeDetailsForApplication = async (resumeId) => {
  try {
    result = await resumeServices.getResumeDetailsForApplication(resumeId);

    return result;
  } catch (err) {
    console.log("getResumeDetailsForApplication/ Resume operation error ", err);
  }
};

const addResumeInfo = async (resumId, data) => {
  try {
    result = await resumeServices.addBasicResumeInfo(resumId, data);

    return result;
  } catch (err) {
    console.log("addResumeInfo/ Resume operation error ", err);
  }
};

//done
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
//done
const getExperiences = async (id) => {
  try {
    result = await resumeServices.getResumeExperience(id);
    return result;
  } catch (err) {
    console.log("getExperiences/ Resume operation error ", err);
  }
};
//done
const deleteExperience = async (idExperience) => {
  try {
    result = await resumeServices.deleteResumeExperience(idExperience);
    return result;
  } catch (err) {
    console.log("deleteExperience / Resume operation error ", err);
  }
};
//done
const updateExperience = async (idExperience, data) => {
  try {
    result = await resumeServices.updateResumeExperience(idExperience, data);
    return result;
  } catch (err) {
    console.log("updateExperience / Resume operation error ", err);
  }
};

const applyJob = async (idResume, idJobOffer) => {
  try {
    result = await resumeServices.applyToJobOffer(idResume, idJobOffer);
    return result;
  } catch (err) {
    console.log("applyJob / Resume operation error ", err);
  }
};

module.exports = {
  getAllResume,
  getUserResumeDetails,
  addResumeInfo,
  addExperience,
  getExperiences,
  deleteExperience,
  updateExperience,
  applyJob,
  getResumeDetailsForApplication,
};
