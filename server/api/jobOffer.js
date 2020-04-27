const jobOfferRouter = require("express").Router();
//middleware
const paginatedResults = require("../middleware/pagination");

const searchResults = require("../middleware/search");
//operation
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
    searchResults(),
    paginatedResults(jobPaginateOp),
    jobController.getAllCompaniesJobOffers
  );

jobOfferRouter
  .route("/apply/:jobId/:resumeId")
  .post(resController.applyToJobByResume);

module.exports = jobOfferRouter;
