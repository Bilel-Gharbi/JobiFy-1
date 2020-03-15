const { interestServices } = require("../services");

//done
const getInterests = async id => {
  try {
    result = await interestServices.getResumeInterests(id);
    return result;
  } catch (err) {
    console.log("getInterests / interestOperations error ", err);
  }
};
//done
const addInterest = async (data, id) => {
  try {
    result = await interestServices.addResumeInterest(data, id);
    return result;
  } catch (err) {
    console.log("addInterest / interestOperations error ", err);
  }
};

//done
const addManyInterests = async (data, id) => {
  //aad the Resume id into the project
  data.map(el => {
    el.ResumeId = id;
  });

  try {
    result = await interestServices.addResumeManyInterests(data, id);
    return result;
  } catch (err) {
    console.log("addManyInterest/ interestOperations error ", err);
  }
};

//done
const deleteInterest = async (id, idInterst) => {
  try {
    result = await interestServices.deleteResumeInterest(id, idInterst);
    return result;
  } catch (err) {
    console.log("deleteInterest / interestOperations error ", err);
  }
};

//done
const updateInterest = async (idInterst, data) => {
  try {
    result = await interestServices.updateResumeInterest(idInterst, data);
    return result;
  } catch (err) {
    console.log("updateAward / interestOperations error ", err);
  }
};

module.exports = {
  getInterests,
  addInterest,
  addManyInterests,
  deleteInterest,
  updateInterest
};
