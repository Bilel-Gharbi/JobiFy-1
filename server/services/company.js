//import User model from models/index.js file
const { Company } = require("../models");

// User service file includes functon thant interact with directly with the database
// After create a service export using the es6 synt

const createCompany = async (data) => {
  try {
    await Company.sync({ force: false });
    let newCompany = await Company.create({ AuthId: data });
    return newCompany;
  } catch (err) {
    console.log("CompanyServices/createCompany Error ", err);
  }
};

const createCompanyInfo = async (authId, data) => {
  try {
    let result = await (
      await Company.findOne({ where: { AuthId: authId } })
    ).update({ ...data });

    return result;
  } catch (err) {
    console.log("UserService/createCompanyInfo  Error ", err);
  }
};
const getAllCompany = async () => {
  try {
    let result = await Company.findAll();
    return result;
  } catch (err) {
    console.log("CompanyServices/getAllCompany Error ", err);
  }
};

//DONE
const getCompanyDetails = async (AuthId) => {
  try {
    let company = await Company.findOne({ where: { AuthId } });
    //retreive company job offers
    if (company) {
      let jobOffers = await company.getJobOffers();
      return { company, jobOffers };
    }
  } catch (err) {
    console.log("CompanyServices/getCompanyDetails Error ", err);
  }
};

module.exports = {
  createCompany,
  getAllCompany,
  createCompanyInfo,
  getCompanyDetails,
};
