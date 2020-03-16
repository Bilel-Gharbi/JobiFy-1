const { skillOperations } = require("../operations");

//get all awards for resume
const getResumeSkills = async (req, res) => {
  try {
    skills = await skillOperations.getSkills(req.params.id);
    res.status(200).json({
      status: "sucess",
      msg: `all skills for Resume with id ${req.params.id}`,
      length: skills.length,
      data: skills
    });
  } catch (err) {
    res.status(401).json(err);
  }
};
//add one award to resume
const addResumeSkill = async (req, res) => {
  try {
    newSkill = await skillOperations.addSkill(req.body, req.params.id);
    res.status(201).json({
      status: "sucess",
      msg: `new skill added to Resume with id ${req.params.id}`,
      newSkill
    });
  } catch (err) {
    res.status(401).json(err);
  }
};

//add many awards to resume
const addResumeManySkills = async (req, res) => {
  try {
    listSkills = await skillOperations.addManySkills(req.body, req.params.id);
    res.status(201).json({
      status: "sucess",
      msg: `Many skills added to Resume with id ${req.params.id}`,
      data: listSkills
    });
  } catch (err) {
    res.status(401).json(err);
  }
};
// TODO: delete one skill from resume
const deleteResumeInterest = async (req, res) => {
  const { id_interest, id } = req.params;
  try {
    let deletedInterest = await interestOperations.deleteInterest(
      id,
      id_interest
    );
    res.status(202).json({
      status: "sucess",
      msg: `Interest ${req.params.id_interest} deleted for the Resume with id ${req.params.id}`,
      deletedInterest
    });
  } catch (err) {
    res.status(401).json(err);
  }
};

//TODO: update skill
const updateResumeInterest = async (req, res) => {
  const { id_interest } = req.params;
  try {
    newInterest = await interestOperations.updateInterest(
      id_interest,
      req.body
    );
    res.status(200).json({
      status: "sucess",
      msg: `Interest ${req.params.id_interest} updated for the Resume with id ${req.params.id}`,
      newInterest
    });
  } catch (err) {
    res.status(401).json(err);
  }
};

module.exports = {
  addResumeSkill,
  addResumeManySkills,
  getResumeSkills,
  deleteResumeInterest,
  updateResumeInterest
};
