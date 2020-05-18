//import User model from models/index.js file
const { Company, Applicant, Resume, User, JobOffer } = require("../models");
const { adjResultFormatingCompnayProfile } = require("../helper/");
const jobOfferServices = require("./jobOffer");

const sequelize = require("sequelize");

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
      let jobs = await company.getJobOffers();
      let jobOffers = await adjResultFormatingCompnayProfile(
        jobs,
        jobOfferServices
      );
      return { company, jobOffers };
    }
  } catch (err) {
    console.log("CompanyServices/getCompanyDetails Error ", err);
  }
};

const getCompanyApplications = async (id) => {
  try {
    let company = await Company.findByPk(id);
    //retreive company job offers
    if (company) {
      let jobOffersIds = await company
        .getJobOffers({
          attributes: ["id"],
          raw: true,
        })
        .map((el) => el.id);

      let applications = await Applicant.findAll({
        where: { jobOfferId: jobOffersIds },
        include: [
          { model: JobOffer },
          { model: Resume, include: [{ model: User }] },
        ],
      });

      return applications;
    }
  } catch (err) {
    console.log("CompanyServices/getCompanyApplications Error ", err);
  }
};

const activateCompanyProfile = async (id) => {
  try {
    let company = await Company.findByPk(id);
    let activatedProfile = await company.update({ active: true });
    return activatedProfile;
  } catch (err) {
    console.log("CompanyServices / activateCompanyProfile Error ", err);
  }
};

const acceptOrRejectCandidate = async (accept, id) => {
  try {
    let application = await Applicant.findByPk(id);
    let updatedApplication;
    if (accept)
      updatedApplication = await application.update({ status: "Accepted" });
    if (!accept)
      updatedApplication = await application.update({ status: "Rejected" });

    return updatedApplication;
  } catch (err) {
    console.log("CompanyServices / acceptOrRejectCandidate Error ", err);
  }
};

module.exports = {
  createCompany,
  getAllCompany,
  createCompanyInfo,
  getCompanyDetails,
  activateCompanyProfile,
  getCompanyApplications,
  acceptOrRejectCandidate,
};
