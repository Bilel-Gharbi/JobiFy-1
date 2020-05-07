const userRouter = require("express").Router();
//import userController as controller
const { userControllers: controller } = require("../controllers");
const checkToken = require("../middleware/verifyToken");
const upload = require("../middleware/multer");

userRouter
  .route("/")
  .post(controller.createNewUser)
  .get(checkToken, controller.getAllUser);

userRouter.route("/:authId/info").post(controller.createUserInfo);

//update userInfo with file upload
userRouter
  .route("/:authId/info")
  .patch(upload.single("userPhoto"), controller.updateUserInfo);

//to active user Profile
userRouter.route("/active").patch(controller.activateUserProfile);

module.exports = userRouter;
