//import User model from models/index.js file
const { Auth } = require("../models");

const login = async () => {
  try {
  } catch (err) {
    console.log("UserService/generateDammyUser data Error ", err);
  }
};

const signUp = async data => {
  try {
    await Auth.sync({ force: false });
    let newAuth = Auth.create({ ...data });
    return newAuth;
  } catch (err) {
    console.log("AuthService /SignUp Error ", err);
  }
};

const checkUniqueUser = async email => {
  try {
    await Auth.sync({ force: false });
    let user = await Auth.findOne({ where: { email } });
    if (user) {
      return true;
    }
    return false;
  } catch (err) {
    console.log("AuthService /checkUniqueUser Error ", err);
  }
};

module.exports = {
  signUp,
  login,
  checkUniqueUser
};
