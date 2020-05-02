const resumeRouter = require("express").Router();
//import resumeController as controller
const { resumeControllers: controller } = require("../controllers");
const { experienceControllers: expController } = require("../controllers");
const { educationControllers: eduController } = require("../controllers");
const { projectControllers: projController } = require("../controllers");
const { certificateControllers: certController } = require("../controllers");
const { awardControllers: awdController } = require("../controllers");
const { languageControllers: langController } = require("../controllers");
const { interestControllers: intController } = require("../controllers");
const { skillControllers: skillController } = require("../controllers");

//get all Resume
resumeRouter.route("/").get(controller.getAllResume);

//TODO: get Resume with details
resumeRouter.route("/:id").get(controller.getUserResumeDetails);

//ResumeInfo route
resumeRouter.route("/:id/info").post(controller.addResumeInfo);

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

//done
resumeRouter
  .route("/:id/projects")
  .post(projController.addResumeManyProjects) // add many projects
  .get(projController.getResumeProjects); // get all projects

resumeRouter.route("/:id/project").post(projController.addResumeProject); // add one

resumeRouter
  .route("/:id/project/:id_project")
  .patch(projController.updateResumeProject) // update on project
  .delete(projController.deleteResumeProject); // delete one project

//done
resumeRouter
  .route("/:id/certificates")
  .post(certController.addResumeManyCertificates) // done
  .get(certController.getResumeCertificates);

resumeRouter
  .route("/:id/certificate")
  .post(certController.addResumeCertificate);
resumeRouter
  .route("/:id/certificate/:id_certificate")
  .patch(certController.updateResumeCertificate)
  .delete(certController.deleteResumeCertificate);

resumeRouter
  .route("/:id/awards")
  .post(awdController.addResumeManyAwards) // done
  .get(awdController.getResumeAwards);

resumeRouter.route("/:id/award").post(awdController.addResumeAward);

resumeRouter
  .route("/:id/award/:id_award")
  .patch(awdController.updateResumeAward)
  .delete(awdController.deleteResumeAward);

//done
resumeRouter
  .route("/:id/languages")
  .post(langController.addResumeManyLanguages) // done
  .get(langController.getResumeLanguages);

resumeRouter.route("/:id/language").post(langController.addResumeLanguage);
resumeRouter
  .route("/:id/language/:id_language")
  .patch(langController.updateResumeLanguage)
  .delete(langController.deleteResumeLanguage);

//done
resumeRouter
  .route("/:id/interests")
  .post(intController.addResumeManyInterests) // done
  .get(intController.getResumeInterests);

resumeRouter.route("/:id/interest").post(intController.addResumeInterest);
resumeRouter
  .route("/:id/interest/:id_interest")
  .patch(intController.updateResumeInterest)
  .delete(intController.deleteResumeInterest);

//done
resumeRouter
  .route("/:id/skills")
  .post(skillController.addResumeManySkills)
  .get(skillController.getResumeSkills);

resumeRouter.route("/:id/skill").post(skillController.addResumeSkill);

// done
resumeRouter
  .route("/:id/skill/:id_skill")
  .patch(skillController.updateSkill)
  .delete(skillController.deleteSkill);

module.exports = resumeRouter;
