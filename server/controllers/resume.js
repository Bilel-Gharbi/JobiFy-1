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
//done
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

const getResumeExperiences = async (req, res) => {
  try {
    experiences = await resumeOperations.getExperiences(req.params.id);
    console.log(experiences);
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

const deleteResumeExperience = async (req, res) => {
  //console.log(req.params.id_experience);
  const { id_experience, id } = req.params;
  try {
    let experienceToDelete = await resumeOperations.deleteExperience(
      id,
      id_experience
    );
    /* newExperience = await resumeOperations.addExperience(
      req.body,
      req.params.id
    ); */
    res.status(202).json({
      status: "sucess",
      msg: `experience ${req.params.id_experience} deleted from with id ${req.params.id}`
    });
  } catch (err) {
    res.status(400).json(err);
  }
};

const updateResumeExperience = async (req, res) => {
  try {
    newExperience = await resumeOperations.addExperience(
      req.body,
      req.params.id
    );
    res.status(201).json({
      status: "sucess",
      msg: `experience ${req.params.id_experience} updated from with id ${req.params.id}`,
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
  addResumeExperience,
  deleteResumeExperience,
  updateResumeExperience,
  getResumeExperiences
};
