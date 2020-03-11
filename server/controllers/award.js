const { awardOperations } = require("../operations");

//get all awards for resume
const getResumeAwards = async (req, res) => {
  try {
    awards = await awardOperations.getAwards(req.params.id);
    res.status(200).json({
      status: "sucess",
      msg: `all award for Resume with id ${req.params.id}`,
      length: awards.length,
      data: awards
    });
  } catch (err) {
    res.status(400).json(err);
  }
};
//add one award to resume
const addResumeAward = async (req, res) => {
  try {
    newAward = await awardOperations.addAward(req.body, req.params.id);
    res.status(201).json({
      status: "sucess",
      msg: `new award added to Resume with id ${req.params.id}`,
      newAward
    });
  } catch (err) {
    res.status(400).json(err);
  }
};

//add many awards to resume
const addResumeManyAwards = async (req, res) => {
  try {
    listAwards = await awardOperations.addManyAwards(req.body, req.params.id);
    res.status(201).json({
      status: "sucess",
      msg: `Many awards added to Resume with id ${req.params.id}`,
      data: listAwards
    });
  } catch (err) {
    res.status(400).json(err);
  }
};
// delete one award from resume
const deleteResumeAward = async (req, res) => {
  const { id_award, id } = req.params;
  try {
    let deletedAward = await awardOperations.deleteAward(id, id_award);
    res.status(202).json({
      status: "sucess",
      msg: `Award ${req.params.id_award} deleted for the Resume with id ${req.params.id}`,
      deletedAward
    });
  } catch (err) {
    res.status(400).json(err);
  }
};

//update award
const updateResumeAward = async (req, res) => {
  const { id_award } = req.params;
  try {
    newAward = await awardOperations.updateAward(id_award, req.body);
    res.status(200).json({
      status: "sucess",
      msg: `Award ${req.params.id_award} updated for the Resume with id ${req.params.id}`,
      newAward
    });
  } catch (err) {
    res.status(400).json(err);
  }
};

module.exports = {
  addResumeAward,
  addResumeManyAwards,
  deleteResumeAward,
  updateResumeAward,
  getResumeAwards
};
