//import User model from models/index.js file
const { Auth, User, Company } = require("../models");

const login = async (AuthId) => {
  try {
    let profile =
      (await User.findOne({ where: { AuthId: AuthId } })) ||
      (await Company.findOne({ where: { AuthId: AuthId } }));

    let auth = await Auth.findByPk(AuthId);

    return { profile, email: auth.email };
  } catch (err) {
    console.log("AuthService / login  Error ", err);
  }
};

const signUp = async (data) => {
  try {
    await Auth.sync({ force: false });
    let newAuth = await Auth.create({ ...data });
    return newAuth;
  } catch (err) {
    console.log("AuthService /SignUp Error ", err);
  }
};

const checkUniqueUser = async (email) => {
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

const activateAccount = async (id) => {
  try {
    let account = await Auth.findByPk(id);
    let activatedAccount = await account.update({ active: true });
    return activatedAccount;
  } catch (err) {
    console.log("AuthService / activateAccount Error ", err);
  }
};
const changePassword = async (data) => {
  try {
    const { email, hashedNewPassword } = data;
    let account = await Auth.findOne({ where: { email: email } });
    // let activatedAccount = await account.update({ active: true });
    const updatedAccount = await account.update({
      password: hashedNewPassword,
    });

    return updatedAccount;
  } catch (err) {
    console.log("AuthService / changePassword Error ", err);
  }
};

//TODO: Forget Password

module.exports = {
  signUp,
  login,
  checkUniqueUser,
  activateAccount,
  changePassword,
};
