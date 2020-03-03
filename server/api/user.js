const userRouter = require("express").Router();
//import userController as controller
const { userController: controller } = require("../controllers");

userRouter
  .route("/")
  .post(controller.createNewUser)
  .get(controller.getAllUser);

module.exports = userRouter;
