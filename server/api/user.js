const userRouter = require("express").Router();
//import userController as controller
const { userControllers: controller } = require("../controllers");
const checkToken = require("../middleware/verifyToken");

userRouter
  .route("/")
  .post(controller.createNewUser)
  .get(checkToken, controller.getAllUser);

userRouter.route("/:authId/info").post(controller.createUserInfo);

module.exports = userRouter;
