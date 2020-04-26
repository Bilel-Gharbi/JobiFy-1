const { jobOfferServices } = require("../services");

const getAllJoboffers = async () => {
  try {
    const result = await jobOfferServices.getAllJobOffers();
    //loop throughth job table use getJobOfferSkills service to get skills for each job
    skillsTab = [];
    for (let i = 0; i < result.length; i++) {
      let jobSkills = await jobOfferServices.getJobOfferSkills(
        result[i].dataValues.id
      );
      skillsTab.push(jobSkills);
    }
    //Modify the result table that contain all job offer bu adding new key jobSkills include the skills related to this jobOffer
    result.map((el, i) => {
      el.dataValues["jobSkills"] = skillsTab[i];
    });
    //return jobOffer array with skills for each job offer
    return result;
  } catch (err) {
    console.log("getAllJoboffers / JobOfferOperations error ", err);
  }
};

//pagination
const paginateAllJoboffers = async (limit, offset) => {
  try {
    const result = await jobOfferServices.paginateAllJobOffers(limit, offset);
    //loop throughth job table use getJobOfferSkills service to get skills for each job
    skillsTab = [];
    for (let i = 0; i < result.rows.length; i++) {
      let jobSkills = await jobOfferServices.getJobOfferSkills(
        result.rows[i].dataValues.id
      );
      skillsTab.push(jobSkills);
    }
    //Modify the result table that contain all job offer bu adding new key jobSkills include the skills related to this jobOffer
    result.rows.map((el, i) => {
      el.dataValues["jobSkills"] = skillsTab[i];
    });
    //return jobOffer array with skills for each job offer
    return result;
  } catch (err) {
    console.log(
      "paginateAllJoboffers / paginateAllJoboffersOperation error ",
      err
    );
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
    result = await jobOfferServices.addManySkillsToJobOffer(data);
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
  addJobOffer,
  deleteJobOffer,
  updateJobOffer,
  addJobOfferSkills,
  addJobOfferSkill,
  getJobOfferSkills,
};
