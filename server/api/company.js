const comapnyRouter = require("express").Router();
//import userController as controller
const { userControllers: controller } = require("../controllers");

comapnyRouter
  .route("/")
  .post(controller.createNewUser)
  .get(controller.getAllUser);

module.exports = comapnyRouter;
