/* User controllers */

const { experienceOperations } = require("../operations");

//get all experiences for resume
const getResumeExperiences = async (req, res) => {
  try {
    experiences = await experienceOperations.getExperiences(req.params.id);
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
    newExperience = await experienceOperations.addExperience(
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

//add many experiences to resume
const addResumeManyExperiences = async (req, res) => {
  try {
    listExperiences = await experienceOperations.addManyExperiences(
      req.body,
      req.params.id
    );
    res.status(201).json({
      status: "sucess",
      msg: `Many experiences added to Resume with id ${req.params.id}`,
      data: listExperiences
    });
  } catch (err) {
    res.status(400).json(err);
  }
};
// delete one experience from resume
const deleteResumeExperience = async (req, res) => {
  const { id_experience, id } = req.params;
  try {
    let deletedExperience = await experienceOperations.deleteExperience(
      id,
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
    newExperience = await experienceOperations.updateExperience(
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
  addResumeExperience,
  addResumeManyExperiences,
  deleteResumeExperience,
  updateResumeExperience,
  getResumeExperiences
};
