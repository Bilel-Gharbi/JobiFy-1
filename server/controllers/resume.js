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

//TODO:
const getUserResumeDetails = async (req, res) => {
  console.log(req.params.id);
  try {
    userResume = await resumeOperations.getUserResumeDetails(req.params.id);
    res.json({ status: "sucess", data: userResume });
  } catch (err) {
    res.status(400).json(err);
  }
};
//get all experiences for resume
const getResumeExperiences = async (req, res) => {
  try {
    experiences = await resumeOperations.getExperiences(req.params.id);
    res.status(200).json({
      status: "sucess",
      msg: `all experiences for Resume with id ${req.params.id}`,
      length: experiences.length,
      data: experiences
    });
  } catch (err) {
    res.status(400).json(err);
  }
};
//add one experience to resume
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
// delete one experience from resume
const deleteResumeExperience = async (req, res) => {
  const { id_experience } = req.params;
  try {
    let deletedExperience = await resumeOperations.deleteExperience(
      id_experience
    );
    res.status(202).json({
      status: "sucess",
      msg: `experience ${req.params.id_experience} deleted for the Resume with id ${req.params.id}`,
      deletedExperience
    });
  } catch (err) {
    res.status(400).json(err);
  }
};
//update one experience from resume
const updateResumeExperience = async (req, res) => {
  const { id_experience } = req.params;
  //console.log(req.body);
  try {
    newExperience = await resumeOperations.updateExperience(
      id_experience,
      req.body
    );
    res.status(200).json({
      status: "sucess",
      msg: `experience ${req.params.id_experience} updated for the Resume with id ${req.params.id}`,
      newExperience
    });
  } catch (err) {
    res.status(400).json(err);
  }
};

module.exports = {
  getAllResume,
  getUserResumeDetails,
  addResumeExperience,
  deleteResumeExperience,
  updateResumeExperience,
  getResumeExperiences
};
