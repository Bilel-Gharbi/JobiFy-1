const { jobOfferServices } = require("../services");
const { adjResultForSearchBySkill, adjResultFormating } = require("../helper/");

const getAllJoboffers = async () => {
  try {
    const data = await jobOfferServices.getAllJobOffers();
    const result = adjResultFormating(data, jobOfferServices);
    return result;
  } catch (err) {
    console.log("getAllJoboffers / JobOfferOperations error ", err);
  }
};

//pagination
const paginateAllJoboffers = async (limit, offset) => {
  try {
    const data = await jobOfferServices.paginateAllJobOffers(limit, offset);
    const result = adjResultFormating(data, jobOfferServices);
    return result;
  } catch (err) {
    console.log(
      "paginateAllJoboffers / paginateAllJoboffersOperation error ",
      err
    );
  }
};

// search with pagination
const getAllJoboffersByFilterAndSearch = async (filter, term, limit, page) => {
  try {
    let result;
    let data;
    switch (filter) {
      case "All":
        data = await jobOfferServices.paginateAllJobOffers(limit, page);
        //formating result
        result = adjResultFormating(data, jobOfferServices);
        return result;

      case "Location":
        data = await jobOfferServices.searchJobOffersByLocation(
          term,
          limit,
          page
        );
        //formating result
        result = adjResultFormating(data, jobOfferServices);
        return result;

      case "Job Position":
        data = await jobOfferServices.searchJobOffersByJobPosition(
          term,
          limit,
          page
        );
        //formating result
        result = adjResultFormating(data, jobOfferServices);
        return result;

      case "Contract":
        data = await jobOfferServices.searchJobOffersByContract(
          term,
          limit,
          page
        );
        //formating result
        result = adjResultFormating(data, jobOfferServices);
        return result;

      case "Skill":
        data = await jobOfferServices.searchJobOffersBySkill(term, limit, page);
        //formating result
        result = adjResultForSearchBySkill(data, jobOfferServices);
        return result;

      default:
        break;
    }
  } catch (err) {
    console.log("getAllJoboffersByPostion / JobOfferOperations error ", err);
  }
};
//done
const getJobOffers = async (id) => {
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
  data.map((el) => (el.JobOfferId = idJobOffer));

  try {
    result = await jobOfferServices.addManySkillsToJobOffer(data, idJobOffer);
    return result;
  } catch (err) {
    console.log("addJobOfferSkill / JobOfferOperations error ", err);
  }
};

const getJobOfferSkills = async (id) => {
  try {
    result = await jobOfferServices.getJobOfferSkills(id);
    return result;
  } catch (err) {
    console.log("getJobOfferSkills / JobOfferOperations error ", err);
  }
};

module.exports = {
  getAllJoboffers,
  paginateAllJoboffers,
  getJobOffers,
  addJobOffer,
  deleteJobOffer,
  updateJobOffer,
  addJobOfferSkills,
  addJobOfferSkill,
  getJobOfferSkills,
  getAllJoboffersByFilterAndSearch,
};
