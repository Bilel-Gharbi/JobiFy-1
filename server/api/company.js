const comapnyRouter = require("express").Router();
//import userController as controller
const { companyControllers: compController } = require("../controllers");
const { jobOfferControllers: jobcontroller } = require("../controllers");

comapnyRouter
  .route("/")
  .post(compController.createNewCompany)
  .get(compController.getAllCompany);

comapnyRouter.route("/:id/jobOffers").get(jobcontroller.getCompanyJobOffer);
comapnyRouter.route("/:id/jobOffer").post(jobcontroller.addCompanyJobOffer);

comapnyRouter
  .route("/:id/jobOffer/:id_jobOffer")
  .patch(jobcontroller.updateCompanyJobOffer)
  .delete(jobcontroller.deleteCompanyJobOffer);

module.exports = comapnyRouter;
