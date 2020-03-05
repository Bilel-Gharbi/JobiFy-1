const resumeRouter = require("express").Router();
//import resumeController as controller
const { resumeControllers: controller } = require("../controllers");

resumeRouter
  .route("/")
  .get(controller.getAllResume)
  .post(controller.createNewResume);

module.exports = resumeRouter;
