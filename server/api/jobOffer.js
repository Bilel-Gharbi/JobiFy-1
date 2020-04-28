const jobOfferRouter = require("express").Router();
//middleware
const paginatedResults = require("../middleware/pagination");
const searchResults = require("../middleware/search");

//operation ued as param in the middleware
const {
  paginateAllJoboffers: jobPaginateOp,
  getAllJoboffersByFilterAndSearch: jobSearchOp,
} = require("../operations/jobOffer");

const {
  jobOfferControllers: jobController,
  resumeControllers: resController,
} = require("../controllers");

jobOfferRouter
  .route("/all")
  .get(
    searchResults(jobSearchOp),
    paginatedResults(jobPaginateOp),
    jobController.getAllCompaniesJobOffers
  );

jobOfferRouter
  .route("/apply/:jobId/:resumeId")
  .post(resController.applyToJobByResume);

module.exports = jobOfferRouter;
