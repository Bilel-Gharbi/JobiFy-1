const jobOfferRouter = require("express").Router();

const {
  jobOfferControllers: jobController,
  resumeControllers: resController
} = require("../controllers");

jobOfferRouter.route("/all").get(jobController.getAllCompaniesJobOffers);

jobOfferRouter
  .route("/apply/:jobId/:resumeId")
  .post(resController.applyToJobByResume);

module.exports = jobOfferRouter;
