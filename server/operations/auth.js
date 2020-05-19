const {
  authServices,
  companyServices,
  userServices,
  resumeServices,
} = require("../services");

const bcrypt = require("bcryptjs");

//const jwt = require("jsonwebtoken");
//const { jwtSecretKey, TokenExpDate } = require("../config");

//import helper function
const { verifyToken, decodeToken, signNewToken } = require("../helper");

const signUp = async (data) => {
  const { email, password, type } = data;
  try {
    let userExist = await authServices.checkUniqueUser(data.email);
    if (!userExist) {
      const hasshedPassword = await bcrypt.hash(password, 12);
      data.password = hasshedPassword;

      //auth service
      newAuth = await authServices.signUp(data);

      const token = await signNewToken({ authId: newAuth.id, authType: type });

      //create user or compnay table
      type === "USER"
        ? (user = await userServices.createUser(newAuth.id))
        : (user = await companyServices.createCompany(newAuth.id));

      //get user or company details
      profileDetails =
        (await companyServices.getCompanyDetails(newAuth.id)) ||
        (await resumeServices.getUserResumeDetails(user.id));

      return { type, token, user, profileDetails, email };
    }
  } catch (err) {
    console.log("signup operation error ", err);
  }
};

const login = async (data) => {
  const { password, email } = data;
  try {
    let userExist = await authServices.checkUniqueUser(email);

    if (userExist) {
      const correctPassword = await bcrypt.compare(
        password,
        userExist.password
      );

      const token = await signNewToken({
        authId: userExist.id,
        authType: userExist.type,
      });
      if (correctPassword) {
        const { type } = userExist;
        let profile = await authServices.login(userExist.id);

        //normal user profile Id to fetch profile resume data
        let profileId = profile.profile.id;

        let profileDetails =
          (await companyServices.getCompanyDetails(userExist.id)) ||
          (await resumeServices.getUserResumeDetails(profileId));

        return { type, token, profile, profileDetails, email };
      }
    }
  } catch (err) {
    console.log("signup operation error ", err);
  }
};

const fetchAuthData = async (token) => {
  try {
    let valid = await verifyToken(token);
    // if the token is valid without err message or err name

    if (!valid.name) {
      token = await signNewToken({
        authId: valid.authId,
        authType: valid.authType,
      });
      //get type from token
      const type = valid.authType;
      let auth = await authServices.login(valid.authId);
      let profileDetails =
        (await companyServices.getCompanyDetails(valid.authId)) ||
        (await resumeServices.getUserResumeDetails(auth.profile.id));

      let profile = auth.profile;
      let email = auth.email;

      return { type, token, profile, profileDetails, email };
    }
  } catch (err) {
    console.log("fetchAuthData operation error ", err);
  }
};

const activeUserAccount = async (authId) => {
  try {
    let account = await authServices.activateAccount(authId);
    return account;
  } catch (err) {
    console.log("activeUserAccount operation error ", err);
  }
};
const changePassword = async (data) => {
  const { pwd, newPwd, email } = data;
  try {
    const userAccount = await authServices.checkUniqueUser(email);
    const correctPassword = await bcrypt.compare(pwd, userAccount.password);

    if (correctPassword) {
      const hashedNewPassword = await bcrypt.hash(newPwd, 12);
      data.hashedNewPassword = hashedNewPassword;
      let result = await authServices.changePassword(data);
      return result;
    }
  } catch (err) {
    console.log("changePassword operation error ", err);
  }
};

module.exports = {
  signUp,
  login,
  fetchAuthData,
  activeUserAccount,
  changePassword,
};
