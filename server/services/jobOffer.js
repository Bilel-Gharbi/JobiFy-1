//import Resume model from models/index.js file
const { Company, JobOffer } = require("../models");

const addCompanyJobOffer = async (data, id) => {
  try {
    let company = await Company.findByPk(id);
    await JobOffer.sync({ force: false });
    let newJobOffer = await company.createJobOffer({ ...data });
    return newJobOffer;
  } catch (err) {
    console.log("JobOfferService /addCompanyJobOffer Eroor ", err);
  }
};

const getCompanyJobOffers = async id => {
  try {
    let company = await Company.findByPk(id);
    let allJobOffers = await company.getJobOffers();
    return allJobOffers;
  } catch (err) {
    console.log("JobOfferService /getCompanyJobOffer Eroor ", err);
  }
};

const deleteCompanyJobOffer = async (id, idJobOffer) => {
  try {
    let jobOffer = await JobOffer.findByPk(idJobOffer);
    if (!jobOffer) {
      return `no JobOffer with id = ${idJobOffer}`;
    }
    if (jobOffer.CompnayId == id) {
      jobOfferToDelete = await jobOffer.destroy();
      return jobOfferToDelete;
    }
    return `invalid id, this comapny do not containe jobOffer with id = ${idJobOffer} `;
  } catch (err) {
    console.log("JobOfferService /deleteCompanyJobOffer Eroor ", err);
  }
};

const updateCompanyJobOffer = async (idJobOffer, data) => {
  try {
    let jobOffer = await JobOffer.findByPk(idJobOffer);

    if (!jobOffer) {
      return `no JobOffer with id = ${idJobOffer}`;
    } else {
      newJobOffer = await jobOffer.update({ ...data });
      return newJobOffer;
    }
  } catch (err) {
    console.log("JobOfferService /updateCompanyJobOffer Eroor ", err);
  }
};
module.exports = {
  addCompanyJobOffer,
  getCompanyJobOffers,
  deleteCompanyJobOffer,
  updateCompanyJobOffer
};
