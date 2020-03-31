const {
  authServices,
  companyServices,
  userServices,
  resumeServices
} = require("../services");

const bcrypt = require("bcryptjs");

//const jwt = require("jsonwebtoken");
//const { jwtSecretKey, TokenExpDate } = require("../config");

//import helper function
const { verifyToken, decodeToken, signNewToken } = require("../helper");

const signUp = async data => {
  const { password, type } = data;
  try {
    let userExist = await authServices.checkUniqueUser(data.email);
    if (!userExist) {
      const hasshedPassword = await bcrypt.hash(password, 12);
      data.password = hasshedPassword;

      //auth service
      newAuth = await authServices.signUp(data);

      //asign a token
      /* const token = await jwt.sign({ authId: newAuth.id }, jwtSecretKey, {
        expiresIn: TokenExpDate
      }); */
      const token = await signNewToken({ authId: newAuth.id });

      //create user or compnay table
      type === "USER"
        ? (user = await userServices.createUser(newAuth.id))
        : (user = await companyServices.createCompany(newAuth.id));

      //get user or company details
      profileDetails =
        (await companyServices.getCompanyDetails(newAuth.id)) ||
        (await resumeServices.getUserResumeDetails(user.id));

      return { type, token, user, profileDetails };
    }
  } catch (err) {
    console.log("signup operation error ", err);
  }
};

const login = async data => {
  const { password, email } = data;
  try {
    let userExist = await authServices.checkUniqueUser(email);
    if (userExist) {
      const correctPassword = await bcrypt.compare(
        password,
        userExist.password
      );
      //asign token
      /* const token = await jwt.sign(
        { authId: userExist.id, autType: userExist.type },
        jwtSecretKey,
        {
          expiresIn: TokenExpDate
        }
      ); */
      const token = await signNewToken({
        authId: userExist.id,
        autType: userExist.type
      });
      if (correctPassword) {
        const { type } = userExist;
        let profile = await authServices.login(userExist.id);
        let profileDetails =
          (await companyServices.getCompanyDetails(userExist.id)) ||
          (await resumeServices.getUserResumeDetails(profile.id));

        return { type, token, profile, profileDetails };
      }
    }
  } catch (err) {
    console.log("signup operation error ", err);
  }
};

const fetchAuthData = async token => {
  try {
    let valid = await verifyToken(token);
    // if the token is valid without err message or err name
    if (!valid.name) {
      token = await signNewToken({
        authId: valid.authId,
        autType: valid.autType
      });
      //get type from token
      const type = valid.autType;
      let profile = await authServices.login(valid.authId);
      let profileDetails =
        (await companyServices.getCompanyDetails(valid.authId)) ||
        (await resumeServices.getUserResumeDetails(profile.id));

      return { type, token, profile, profileDetails };
    }
  } catch (err) {
    console.log("fetchAuthData operation error ", err);
  }
};

module.exports = {
  signUp,
  login,
  fetchAuthData
};
