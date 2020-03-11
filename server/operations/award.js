const { awardServices } = require("../services");

//done
const getAwards = async id => {
  try {
    result = await awardServices.getResumeAwards(id);
    return result;
  } catch (err) {
    console.log("getAwards/ AwardOperations error ", err);
  }
};
//done
const addAward = async (data, id) => {
  try {
    result = await awardServices.addResumeAward(data, id);
    return result;
  } catch (err) {
    console.log("addAward / AwardOperations error ", err);
  }
};

//done
const addManyAwards = async (data, id) => {
  //aad the Resume id into the project
  data.map(el => {
    el.ResumeId = id;
  });

  try {
    result = await awardServices.addResumeManyAwards(data, id);
    return result;
  } catch (err) {
    console.log("addManyAwards/ AwardOperations error ", err);
  }
};

//done
const deleteAward = async (id, idAward) => {
  try {
    result = await awardServices.deleteResumeAward(id, idAward);
    return result;
  } catch (err) {
    console.log("deleteAward / AwardOperations error ", err);
  }
};

//done
const updateAward = async (idAward, data) => {
  try {
    result = await awardServices.updateResumeAward(idAward, data);
    return result;
  } catch (err) {
    console.log("updateAward / AwardOperations error ", err);
  }
};

module.exports = {
  getAwards,
  addAward,
  addManyAwards,
  deleteAward,
  updateAward
};
