//import User model from models/index.js file
const { Company } = require("../models");

// User service file includes functon thant interact with directly with the database
// After create a service export using the es6 synt

const createCompany = async data => {
  try {
    await Company.sync({ force: false });
    let newCompany = await Company.create({ AuthId: data });
    return newCompany;
  } catch (err) {
    console.log("CompanyServices/createCompany Error ", err);
  }
};

const createCompanyInfo = async (authId, data) => {
  console.log(authId);
  try {
    let result = await (
      await Company.findOne({ where: { AuthId: authId } })
    ).update({ ...data });

    return result;
  } catch (err) {
    console.log("UserService/generateDammyUser data Error ", err);
  }
};
const getAllCompany = async () => {
  try {
    let result = await Company.findAll();
    return result;
  } catch (err) {
    console.log("CompanyServices/getAllUser Error ", err);
  }
};

module.exports = {
  createCompany,
  getAllCompany,
  createCompanyInfo
};
