const { jobOfferServices } = require("../services");

//done
const getJobOffers = async id => {
  try {
    result = await jobOfferServices.getCompanyJobOffers(id);
    return result;
  } catch (err) {
    console.log("getJobOffers / JobOfferOperations error ", err);
  }
};
//done
const addJobOffer = async (data, id) => {
  try {
    result = await jobOfferServices.addCompanyJobOffer(data, id);
    return result;
  } catch (err) {
    console.log("addJobOffer / JobOfferOperations error ", err);
  }
};

//done
const deleteJobOffer = async (id, idJobOffer) => {
  try {
    result = await jobOfferServices.deleteCompanyJobOffer(id, idJobOffer);
    return result;
  } catch (err) {
    console.log("deleteJobOffer / JobOfferOperations error ", err);
  }
};

//done
const updateJobOffer = async (idJobOffer, data) => {
  try {
    result = await jobOfferServices.updateCompanyJobOffer(idJobOffer, data);
    return result;
  } catch (err) {
    console.log("updateJobOffer / JobOfferOperations error ", err);
  }
};

module.exports = {
  getJobOffers,
  addJobOffer,
  deleteJobOffer,
  updateJobOffer
};
