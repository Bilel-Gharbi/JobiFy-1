const authRouter = require("express").Router();
//import userController as controller
const { authControllers: controller } = require("../controllers");

authRouter.route("/signup").post(controller.signUp);

module.exports = authRouter;
