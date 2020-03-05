/* User controllers */

const { resumeOperations } = require("../operations");
//const data = require("../fakeUserData");

const getAllResume = async (req, res) => {
  try {
    resumes = await resumeOperations.getAllResume();
    res
      .status(200)
      .json({ status: "sucess", length: resumes.length, data: resumes });
  } catch (err) {
    res.status(400).json(err);
  }
};

const createNewResume = async (req, res) => {
  try {
    newResume = await resumeOperations.createNewResume(req.body);
    res
      .status(201)
      .json({ status: "sucess", msg: "new resume created .... ", newResume });
  } catch (err) {
    res.status(400).json(err);
  }
};
const generateFakeResumes = async (req, res) => {};

module.exports = {
  getAllResume,
  createNewResume,
  generateFakeResumes
};
