//import Resume model from models/index.js file
const { Resume } = require("../models");

const createResume = async (data, userId) => {
  const { summary, expertiseLevel } = data;
  try {
    await Resume.sync({ force: false });
    // Table created
    return Resume.create({
      summary,
      expertiseLevel
    });
  } catch (err) {
    console.log("ResumeService/createResume Error ", err);
  }
};

const getAllResume = async () => {
  try {
    let result = await Resume.findAll();
    return result;
  } catch (err) {
    console.log("ResumeService/getAllResume Error ", err);
  }
};

const generateFakeResume = async fakeData => {
  try {
    await User.sync({ force: true });
    return User.bulkCreate(fakeData);
  } catch (err) {
    console.log("ResumeService/generateFakeResume data Error ", err);
  }
};

module.exports = {
  createResume,
  getAllResume,
  generateFakeResume
};
