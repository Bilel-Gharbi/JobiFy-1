const authRouter = require("express").Router();
//import userController as controller
const { authControllers: controller } = require("../controllers");

authRouter.route("/signup").post(controller.signUp);
authRouter.route("/login").post(controller.login);

module.exports = authRouter;
