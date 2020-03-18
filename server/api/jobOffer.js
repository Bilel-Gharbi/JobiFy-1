const jobOfferRouter = require("express").Router();

const { jobOfferControllers: jobcontroller } = require("../controllers");

jobOfferRouter.route("/").get(jobcontroller.getAllCompaniesJobOffers);

module.exports = jobOfferRouter;
