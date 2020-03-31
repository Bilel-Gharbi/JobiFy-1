const authRouter = require("express").Router();
//import userController as controller
const { authControllers: controller } = require("../controllers");

authRouter.route("/signup").post(controller.signUp);
authRouter.route("/login").post(controller.login);
//i used to keep user connected
authRouter.route("/login").get(controller.fetchAuthData);

module.exports = authRouter;
