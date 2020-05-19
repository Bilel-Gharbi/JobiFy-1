const authRouter = require("express").Router();
//import userController as controller
const { authControllers: controller } = require("../controllers");

authRouter.route("/signup").post(controller.signUp);
authRouter.route("/login").post(controller.login);
//to active account using mail confirmation
authRouter.route("/active").patch(controller.activeUserAccount);
//i used to keep user connected
authRouter.route("/login").get(controller.fetchAuthData);
authRouter.route("/changePassword").patch(controller.changePassword);

module.exports = authRouter;
