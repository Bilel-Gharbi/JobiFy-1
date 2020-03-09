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
const getUserResumeDetails = async (req, res) => {
  console.log(req.params.id);
  try {
    userResume = await resumeOperations.getUserResumeDetails(req.params.id);
    res.json({ status: "sucess", data: userResume });
  } catch (err) {
    res.status(400).json(err);
  }
};
const addResumeExperience = async (req, res) => {
  try {
    newExperience = await resumeOperations.addExperience(
      req.body,
      req.params.id
    );
    res.status(201).json({
      status: "sucess",
      msg: `new experience added to Resume with id ${req.params.id}`,
      data: newExperience
    });
  } catch (err) {
    res.status(400).json(err);
  }
};

module.exports = {
  getAllResume,
  createNewResume,
  getUserResumeDetails,
  addResumeExperience
};
