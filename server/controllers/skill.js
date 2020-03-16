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
//done
const deleteSkill = async (req, res) => {
  const { id_skill, id_jobOffer, id } = req.params;
  try {
    let deletedSkill = await skillOperations.deleteSkill(
      id,
      id_jobOffer,
      id_skill
    );
    res.status(202).json({
      status: "sucess",
      msg: `Skill ${req.params.id_skill} deleted for the Resume or JobOffer with id ${req.params.id}`,
      deletedSkill
    });
  } catch (err) {
    res.status(401).json(err);
  }
};

//done
const updateSkill = async (req, res) => {
  const { id_skill } = req.params;
  try {
    newSkill = await skillOperations.updateSkill(id_skill, req.body);
    res.status(200).json({
      status: "sucess",
      msg: `Skill ${req.params.id_skill} updated for the Resume or JobOffer with id ${req.params.id}`,
      newSkill
    });
  } catch (err) {
    res.status(401).json(err);
  }
};

module.exports = {
  addResumeSkill,
  addResumeManySkills,
  getResumeSkills,
  deleteSkill,
  updateSkill
};
