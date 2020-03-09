const resumeRouter = require("express").Router();
//import resumeController as controller
const { resumeControllers: controller } = require("../controllers");

resumeRouter
  .route("/")
  .get(controller.getAllResume)
  .post(controller.createNewResume);

resumeRouter.route("/:id").get(controller.getUserResumeDetails);

resumeRouter
  .route("/:id/experience")
  .post(controller.addResumeExperience) // done
  .get(controller.getResumeExperiences); // get all experience by resume
resumeRouter
  .route("/:id/experience/:id_experience")
  .patch(controller.addResumeExperience) // update one experience
  .delete(controller.deleteResumeExperience); // delete

//TODO:
resumeRouter
  .route("/:id/education")
  .post(controller.addResumeExperience) // done
  .get(controller.addResumeExperience);
resumeRouter
  .route("/:id/education/:id_education")
  .patch(controller.addResumeExperience)
  .delete(controller.addResumeExperience);

//TODO:
resumeRouter
  .route("/:id/project")
  .post(controller.addResumeExperience) // done
  .get(controller.addResumeExperience);
resumeRouter
  .route("/:id/project/:id_project")
  .patch(controller.addResumeExperience)
  .delete(controller.addResumeExperience);

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
