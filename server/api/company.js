const comapnyRouter = require("express").Router();
//import userController as controller
const { companyControllers: compController } = require("../controllers");
const { jobOfferControllers: jobcontroller } = require("../controllers");
const { skillControllers: skillController } = require("../controllers");

comapnyRouter
  .route("/")
  .post(compController.createNewCompany)
  .get(compController.getAllCompany);

//to complete compnay profile
comapnyRouter.route("/:authId/info").post(compController.createCompanyInfo);

comapnyRouter.route("/:id/jobOffers").get(jobcontroller.getCompanyJobOffer);
comapnyRouter.route("/:id/jobOffer").post(jobcontroller.addCompanyJobOffer);

comapnyRouter
  .route("/:id/jobOffer/:id_jobOffer")
  .patch(jobcontroller.updateCompanyJobOffer)
  .delete(jobcontroller.deleteCompanyJobOffer);

//job skills
//one skill
comapnyRouter
  .route("/:id/jobOffer/:id_jobOffer/skill")
  .post(jobcontroller.addJobOfferSkill)
  .patch(skillController.updateSkill)
  .delete(skillController.deleteSkill);

//many skills
//add many / get all skills
comapnyRouter
  .route("/:id/jobOffer/:id_jobOffer/skills")
  .post(jobcontroller.addJobOfferSkills)
  .get(jobcontroller.getJobOfferSkills);

//done
//in this route i use skill service because JobOffer skills is stored in the same table with Resume skills
comapnyRouter
  .route("/:id/jobOffer/:id_jobOffer/skill/:id_skill")
  .patch(skillController.updateSkill)
  .delete(skillController.deleteSkill);
module.exports = comapnyRouter;
