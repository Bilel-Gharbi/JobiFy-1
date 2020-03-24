//import User model from models/index.js file
const { Auth, User, Company } = require("../models");

const login = async AuthId => {
  try {
    let profile =
      (await User.findOne({ where: { AuthId: AuthId } })) ||
      (await Company.findOne({ where: { AuthId: AuthId } }));

    return profile;
  } catch (err) {
    console.log("AuthService / login  Error ", err);
  }
};

const signUp = async data => {
  try {
    await Auth.sync({ force: false });
    let newAuth = await Auth.create({ ...data });
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
      return user;
    }
    return false;
  } catch (err) {
    console.log("AuthService /checkUniqueUser Error ", err);
  }
};

//TODO: Forget Password
//TODO: email verification
module.exports = {
  signUp,
  login,
  checkUniqueUser
};