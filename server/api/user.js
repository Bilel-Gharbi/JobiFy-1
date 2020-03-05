const userRouter = require("express").Router();
//import userController as controller
const { userControllers: controller } = require("../controllers");

userRouter
  .route("/")
  .post(controller.createNewUser)
  .get(controller.getAllUser);

userRouter.route("/generate").post(controller.generateFakeUsers);

module.exports = userRouter;
