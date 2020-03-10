const resumeRouter = require("express").Router();
//import resumeController as controller
const { resumeControllers: controller } = require("../controllers");
const { experienceControllers: expController } = require("../controllers");
const { educationControllers: eduController } = require("../controllers");
const { projectControllers: projController } = require("../controllers");

//get all Resume
resumeRouter.route("/").get(controller.getAllResume);

//TODO: get Resume with details
resumeRouter.route("/:id").get(controller.getUserResumeDetails);

//done
resumeRouter
  .route("/:id/experiences")
  .post(expController.addResumeManyExperiences)
  .get(expController.getResumeExperiences); // get all experience by resume

resumeRouter.route("/:id/experience").post(expController.addResumeExperience); // done

resumeRouter
  .route("/:id/experience/:id_experience")
  .patch(expController.updateResumeExperience) // update one experience
  .delete(expController.deleteResumeExperience); // delete

//done
resumeRouter
  .route("/:id/educations")
  .post(eduController.addResumeManyEducations) // add many educations
  .get(eduController.getResumeEducations); // get all educations

resumeRouter.route("/:id/education").post(eduController.addResumeEducation); // add one

resumeRouter
  .route("/:id/education/:id_education")
  .patch(eduController.updateResumeEducation) // update on education
  .delete(eduController.deleteResumeEducation); // delete one education

//TODO:
resumeRouter
  .route("/:id/projects")
  .post(projController.addResumeManyProjects) // add many projects
  .get(projController.getResumeProjects); // get all projects

resumeRouter.route("/:id/project").post(projController.addResumeProject); // add one

resumeRouter
  .route("/:id/project/:id_project")
  .patch(projController.updateResumeProject) // update on project
  .delete(projController.deleteResumeProject); // delete one project

//TODO:
resumeRouter
  .route("/:id/language")
  .post(controller.addResumeExperience) // done
  .get(controller.addResumeExperience);
resumeRouter
  .route("/:id/language/:id_language")
  .patch(controller.addResumeExperience)
  .delete(controller.addResumeExperience);

//TODO:
resumeRouter
  .route("/:id/interst")
  .post(controller.addResumeExperience) // done
  .get(controller.addResumeExperience);
resumeRouter
  .route("/:id/interst/:id_interst")
  .patch(controller.addResumeExperience)
  .delete(controller.addResumeExperience);

//TODO:
resumeRouter
  .route("/:id/award")
  .post(controller.addResumeExperience) // done
  .get(controller.addResumeExperience);
resumeRouter
  .route("/:id/award/:id_award")
  .patch(controller.addResumeExperience)
  .delete(controller.addResumeExperience);

//TODO:
resumeRouter
  .route("/:id/certificate")
  .post(controller.addResumeExperience) // done
  .get(controller.addResumeExperience);
resumeRouter
  .route("/:id/certificate/:id_certificate")
  .patch(controller.addResumeExperience)
  .delete(controller.addResumeExperience);

//TODO: add id job in skill table
resumeRouter
  .route("/:id/skill")
  .post(controller.addResumeExperience)
  .get(controller.addResumeExperience);
resumeRouter
  .route("/:id/skill/:id_skill")
  .patch(controller.addResumeExperience)
  .delete(controller.addResumeExperience);

module.exports = resumeRouter;
