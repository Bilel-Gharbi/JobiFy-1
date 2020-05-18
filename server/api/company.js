const comapnyRouter = require("express").Router();
//import userController as controller
const { companyControllers: compController } = require("../controllers");
const { jobOfferControllers: jobcontroller } = require("../controllers");
const { skillControllers: skillController } = require("../controllers");

const upload = require("../middleware/multer");
const sendCandidateMail = require("../middleware/mailer");

comapnyRouter
  .route("/")
  .post(compController.createNewCompany)
  .get(compController.getAllCompany);

//to complete compnay profile
comapnyRouter.route("/:authId/info").post(compController.createCompanyInfo);

//update company profile
comapnyRouter
  .route("/:authId/info")
  .patch(upload.single("companyPhoto"), compController.createCompanyInfo);

//activate company
comapnyRouter.route("/active").patch(compController.activateCompanyProfile);

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

comapnyRouter
  .route("/:id/applications")
  .get(compController.getCompanyApplication);

//get resume details for job application
comapnyRouter
  .route("/applications/resume/:resumeId")
  .get(compController.getResumeDetailsForApplication);

//accept or reject candidate
comapnyRouter
  .route("/applications/:id")
  .patch(sendCandidateMail, compController.acceptOrRejectCandidate);
module.exports = comapnyRouter;
