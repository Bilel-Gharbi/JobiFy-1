//import User model from models/index.js file
const { Auth, User, Company } = require("../models");
const resumeServices = require("./resume");

const login = async AuthId => {
  try {
    let profile =
      (await User.findOne({ where: { AuthId } })) ||
      (await Company.findOne({ where: { AuthId } }));
    //id user
    //  let profileDetails = await resumeServices.getUserResumeDetails()  || company profile
    let profileDetails = await resumeServices.getUserResumeDetails(profile.id);
    return { userInfo: profile, profileDetails };
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
