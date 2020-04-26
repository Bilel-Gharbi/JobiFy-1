const jobOfferRouter = require("express").Router();
//middleware
const paginatedResults = require("../middleware/pagination");

const searchResults = require("../middleware/search");
//operation
const {
  paginateAllJoboffers: jobOperation,
} = require("../operations/jobOffer");

const {
  jobOfferControllers: jobController,
  resumeControllers: resController,
} = require("../controllers");

jobOfferRouter
  .route("/all")
  .get(paginatedResults(jobOperation), jobController.getAllCompaniesJobOffers);

jobOfferRouter
  .route("/apply/:jobId/:resumeId")
  .post(resController.applyToJobByResume);

module.exports = jobOfferRouter;
