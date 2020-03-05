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
    console.log("getAllResume operation error ", err);
  }
};

module.exports = {
  createNewResume,
  getAllResume
};
