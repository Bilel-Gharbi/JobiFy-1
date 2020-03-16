const { jobOfferOperations } = require("../operations");

const getCompanyJobOffer = async (req, res) => {
  try {
    jobOffers = await jobOfferOperations.getJobOffers(req.params.id);
    res.status(200).json({
      status: "sucess",
      msg: `all jobs for company with id ${req.params.id}`,
      length: jobOffers.length,
      data: jobOffers
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
      newJobOffer
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
      deletedJobOffer
    });
  } catch (err) {
    res.status(401).json(err);
  }
};

//update award
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
      newJobOffer
    });
  } catch (err) {
    res.status(401).json(err);
  }
};

module.exports = {
  addCompanyJobOffer,
  deleteCompanyJobOffer,
  updateCompanyJobOffer,
  getCompanyJobOffer
};
