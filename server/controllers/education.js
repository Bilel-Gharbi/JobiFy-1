/* User controllers */

const { educationOperations } = require("../operations");

//get all education for resume
const getResumeEducations = async (req, res) => {
  try {
    educations = await educationOperations.getEducations(req.params.id);
    res.status(200).json({
      status: "sucess",
      msg: `all educations for Resume with id ${req.params.id}`,
      length: educations.length,
      data: educations
    });
  } catch (err) {
    res.status(400).json(err);
  }
};
//add one education to resume
const addResumeEducation = async (req, res) => {
  try {
    newEducation = await educationOperations.addEducation(
      req.body,
      req.params.id
    );
    res.status(201).json({
      status: "sucess",
      msg: `new education added to Resume with id ${req.params.id}`,
      newEducation
    });
  } catch (err) {
    res.status(400).json(err);
  }
};

//add many experiences to resume
const addResumeManyEducations = async (req, res) => {
  try {
    listEducations = await educationOperations.addManyEducations(
      req.body,
      req.params.id
    );
    res.status(201).json({
      status: "sucess",
      msg: `Many educations added to Resume with id ${req.params.id}`,
      data: listEducations
    });
  } catch (err) {
    res.status(400).json(err);
  }
};
// delete one education from resume
const deleteResumeEducation = async (req, res) => {
  const { id_education, id } = req.params;
  try {
    let deletedEducation = await educationOperations.deleteEducation(
      id,
      id_education
    );
    res.status(202).json({
      status: "sucess",
      msg: `education ${req.params.id_education} deleted for the Resume with id ${req.params.id}`,
      deletedEducation
    });
  } catch (err) {
    res.status(400).json(err);
  }
};

//update one experience from resume
const updateResumeEducation = async (req, res) => {
  const { id_education } = req.params;
  try {
    newEducation = await educationOperations.updateEducation(
      id_education,
      req.body
    );
    res.status(200).json({
      status: "sucess",
      msg: `Education ${req.params.id_education} updated for the Resume with id ${req.params.id}`,
      newEducation
    });
  } catch (err) {
    res.status(400).json(err);
  }
};

module.exports = {
  addResumeEducation,
  addResumeManyEducations,
  deleteResumeEducation,
  updateResumeEducation,
  getResumeEducations
};
