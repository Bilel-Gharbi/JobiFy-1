const { interestOperations } = require("../operations");

//get all awards for resume
const getResumeInterests = async (req, res) => {
  try {
    interests = await interestOperations.getInterests(req.params.id);
    res.status(200).json({
      status: "sucess",
      msg: `all interest for Resume with id ${req.params.id}`,
      length: interests.length,
      data: interests
    });
  } catch (err) {
    res.status(401).json(err);
  }
};
//add one award to resume
const addResumeInterest = async (req, res) => {
  try {
    newInterest = await interestOperations.addInterest(req.body, req.params.id);
    res.status(201).json({
      status: "sucess",
      msg: `new Interest added to Resume with id ${req.params.id}`,
      newInterest
    });
  } catch (err) {
    res.status(401).json(err);
  }
};

//add many awards to resume
const addResumeManyInterests = async (req, res) => {
  try {
    listInterests = await interestOperations.addManyInterests(
      req.body,
      req.params.id
    );
    res.status(201).json({
      status: "sucess",
      msg: `Many interest added to Resume with id ${req.params.id}`,
      data: listInterests
    });
  } catch (err) {
    res.status(401).json(err);
  }
};
// delete one award from resume
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

//update award
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
  addResumeInterest,
  addResumeManyInterests,
  deleteResumeInterest,
  updateResumeInterest,
  getResumeInterests
};
