const { jobOfferOperations } = require("../operations");

const getAllCompaniesJobOffers = async (req, res) => {
  try {
    allJobOffers = await jobOfferOperations.getAllJoboffers();
    res.status(200).json({
      status: "sucess",
      msg: `all jobOffer for all compnaies `,
      length: allJobOffers.length,
      data: allJobOffers,
    });
  } catch (err) {
    res.status(401).json(err);
  }
};

const getCompanyJobOffer = async (req, res) => {
  try {
    jobOffers = await jobOfferOperations.getJobOffers(req.params.id);
    res.status(200).json({
      status: "sucess",
      msg: `all jobs for company with id ${req.params.id}`,
      length: jobOffers.length,
      data: jobOffers,
    });
  } catch (err) {
    res.status(401).json(err);
  }
};
//add one offer to resume
const addCompanyJobOffer = async (req, res) => {
  try {
    newJobOffer = await jobOfferOperations.addJobOffer(req.body, req.params.id);
    res.status(201).json({
      status: "sucess",
      msg: `new job offer added to company with id ${req.params.id}`,
      newJobOffer,
    });
  } catch (err) {
    res.status(401).json(err);
  }
};

const deleteCompanyJobOffer = async (req, res) => {
  const { id_jobOffer, id } = req.params;
  try {
    let deletedJobOffer = await jobOfferOperations.deleteJobOffer(
      id,
      id_jobOffer
    );
    res.status(202).json({
      status: "sucess",
      msg: `jobOffer with  ${req.params.id_jobOffer} deleted for the Resume with id ${req.params.id}`,
      deletedJobOffer,
    });
  } catch (err) {
    res.status(401).json(err);
  }
};

//done
const updateCompanyJobOffer = async (req, res) => {
  const { id_jobOffer } = req.params;
  try {
    newJobOffer = await jobOfferOperations.updateJobOffer(
      id_jobOffer,
      req.body
    );
    res.status(200).json({
      status: "sucess",
      msg: `JobOffer  ${req.params.id_jobOffer} updated for the company with id ${req.params.id}`,
      newJobOffer,
    });
  } catch (err) {
    res.status(401).json(err);
  }
};
//add skill to job offer
const addJobOfferSkill = async (req, res) => {
  const { id_jobOffer } = req.params;
  try {
    newJobOfferSkill = await jobOfferOperations.addJobOfferSkill(
      id_jobOffer,
      req.body
    );
    console.log(newJobOfferSkill);
    res.status(200).json({
      status: "sucess",
      msg: `new Skill added to job offer ${req.params.id_jobOffer} for the company with id ${req.params.id}`,
      newJobOfferSkill,
    });
  } catch (err) {
    res.status(401).json(err);
  }
};

// add many skills to one job offer
const addJobOfferSkills = async (req, res) => {
  const { id_jobOffer } = req.params;
  try {
    const jobsList = await jobOfferOperations.addJobOfferSkills(
      id_jobOffer,
      req.body
    );

    res.status(200).json({
      status: "sucess",
      msg: `many Skill added to job offer ${req.params.id_jobOffer} for the company with id ${req.params.id}`,
      jobsList,
    });
  } catch (err) {
    res.status(401).json(err);
  }
};

const getJobOfferSkills = async (req, res) => {
  try {
    jobOfferSkills = await jobOfferOperations.getJobOfferSkills(
      req.params.id_jobOffer
    );
    res.status(200).json({
      status: "sucess",
      msg: `all skill for jobOffer with id ${req.id_jobOffer}`,
      length: jobOfferSkills.length,
      data: jobOfferSkills,
    });
  } catch (err) {
    res.status(401).json(err);
  }
};

module.exports = {
  getAllCompaniesJobOffers,
  addCompanyJobOffer,
  deleteCompanyJobOffer,
  updateCompanyJobOffer,
  getCompanyJobOffer,
  addJobOfferSkill,
  addJobOfferSkills,
  getJobOfferSkills,
};
