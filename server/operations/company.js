const { companyServices } = require("../services");
const cloudinary = require("cloudinary").v2;

const createNewCompany = async (data) => {
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
const getCompanyApplication = async (id) => {
  try {
    result = await companyServices.getCompanyApplications(id);
    return result;
  } catch (err) {
    console.log("getCompanyApplication / Company Operation error ", err);
  }
};

const createCompnayInfo = async (authId, data, filePath) => {
  try {
    if (filePath) {
      const photoCloudURL = await cloudinary.uploader.upload(filePath);
      data.logo = photoCloudURL.url;
    }
    result = await companyServices.createCompanyInfo(authId, data);
    return result;
  } catch (err) {
    console.log("createCompnayInfo / CompanyOperation error ", err);
  }
};

const activateCompanyProfile = async (id) => {
  try {
    result = await companyServices.activateCompanyProfile(id);
    return result;
  } catch (err) {
    console.log("activateCompanyProfile / company operation error ", err);
  }
};

const acceptOrRejectCandidate = async (accept, id) => {
  try {
    result = await companyServices.acceptOrRejectCandidate(accept, id);
    return result;
  } catch (err) {
    console.log("acceptOrRejectCandidate / company operation error ", err);
  }
};

module.exports = {
  createNewCompany,
  getAllCompany,
  createCompnayInfo,
  activateCompanyProfile,
  getCompanyApplication,
  acceptOrRejectCandidate,
};
