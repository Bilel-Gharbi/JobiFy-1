const { companyServices } = require("../services");

const createNewCompany = async data => {
  try {
    result = await companyServices.createCompany(data);
    return result;
  } catch (err) {
    console.log("createNewCompany / CompanyOperation error ", err);
  }
};

const getAllCompany = async () => {
  try {
    result = await companyServices.getAllCompany();
    return result;
  } catch (err) {
    console.log("getAllCompany / CompanyOperation error ", err);
  }
};

const createCompnayInfo = async (authId, data) => {
  try {
    result = await companyServices.createCompanyInfo(authId, data);
    return result;
  } catch (err) {
    console.log("createCompnayInfo / CompanyOperation error ", err);
  }
};

module.exports = {
  createNewCompany,
  getAllCompany,
  createCompnayInfo
};
