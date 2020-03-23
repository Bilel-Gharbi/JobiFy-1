const { authServices, companyServices, userServices } = require("../services");
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
      newAuth = await authServices.signUp(data);
      //
      const token = await jwt.sign({ authId: newAuth.id }, jwtSecretKey, {
        expiresIn: TokenExpDate
      });
      //
      //create user or compnay table
      console.log(newAuth.userInfo.id);
      type === "USER"
        ? (user = await userServices.createUser(newAuth.userInfo.id))
        : (user = await companyServices.createCompany(newAuth.userInfo.id));

      return { token, user };
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
        console.log(user);
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
