const { jobOfferServices } = require("../services");

const getAllJoboffers = async () => {
  try {
    result = await jobOfferServices.getAllJobOffers();
    /* let resultWithSkills = [...result];
    for (let i = 0; i < result.length; i++) {
      obj = {};
      skillArray = await result[i].getSkills();
      obj.data = 33;
      result[i].skills = [1, 2, 3];
      resultWithSkills.push(result[i]);
    } */

    return result;
  } catch (err) {
    console.log("getAllJoboffers / JobOfferOperations error ", err);
  }
};
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

//add one skills to one joboffer
//done
const addJobOfferSkill = async (idJobOffer, data) => {
  try {
    result = await jobOfferServices.addSkillToJobOffer(idJobOffer, data);
    return result;
  } catch (err) {
    console.log("addJobOfferSkills / JobOfferOperations error ", err);
  }
};

//add one skills to one joboffer
const addJobOfferSkills = async (idJobOffer, data) => {
  data.map(el => (el.JobOfferId = idJobOffer));
  try {
    result = await jobOfferServices.addManySkillsToJobOffer(data);
    return result;
  } catch (err) {
    console.log("addJobOfferSkill / JobOfferOperations error ", err);
  }
};

const getJobOfferSkills = async id => {
  try {
    result = await jobOfferServices.getJobOfferSkills(id);
    return result;
  } catch (err) {
    console.log("getJobOfferSkills / JobOfferOperations error ", err);
  }
};

module.exports = {
  getAllJoboffers,
  getJobOffers,
  addJobOffer,
  deleteJobOffer,
  updateJobOffer,
  addJobOfferSkills,
  addJobOfferSkill,
  getJobOfferSkills
};
