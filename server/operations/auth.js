const { authServices, companyServices, userServices } = require("../services");
const bcrypt = require("bcryptjs");

const signUp = async data => {
  const { password, type } = data;
  try {
    let mailExisit = await authServices.checkUniqueUser(data.email);

    if (!mailExisit) {
      const hasshedPassword = await bcrypt.hash(password, 12);
      data.password = hasshedPassword;
      newAuth = await authServices.signUp(data);

      //create user or compnay table

      type === "USER"
        ? await userServices.createUser(newAuth.id)
        : await companyServices.createCompany(newAuth.id);

      return newAuth;
    }
  } catch (err) {
    console.log("signup operation error ", err);
  }
};

module.exports = {
  signUp
};
