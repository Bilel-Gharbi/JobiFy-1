const {
  authServices,
  companyServices,
  userServices,
  resumeServices
} = require("../services");

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const { jwtSecretKey, TokenExpDate } = require("../config");

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
      const token = await jwt.sign({ authId: newAuth.id }, jwtSecretKey, {
        expiresIn: TokenExpDate
      });

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
      const token = await jwt.sign(
        { authId: userExist.id, autType: userExist.type },
        jwtSecretKey,
        {
          expiresIn: TokenExpDate
        }
      );
      if (correctPassword) {
        let user = await authServices.login(userExist.id);
        //console.log(user);
        return { token, user };
      }
    }
  } catch (err) {
    console.log("signup operation error ", err);
  }
};

module.exports = {
  signUp,
  login
};
