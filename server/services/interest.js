//import Resume model from models/index.js file
const { Resume, Interest } = require("../models");

//done
const addResumeInterest = async (data, id) => {
  try {
    let resume = await Resume.findByPk(id);
    await Interest.sync({ force: false });
    let newInterest = await resume.createInterest({ ...data });
    return newInterest;
  } catch (err) {
    console.log("InterestService /addResumeInterest Eroor ", err);
  }
};
const addResumeManyInterests = async data => {
  try {
    await Interest.sync({ force: false });
    let newInterests = await Interest.bulkCreate(data);
    return newInterests;
  } catch (err) {
    console.log("InterestService /addResumeManyInterests Eroor ", err);
  }
};
//done
const getResumeInterests = async id => {
  try {
    let resume = await Resume.findByPk(id);
    let allInterests = await resume.getInterests();
    return allInterests;
  } catch (err) {
    console.log("InterestService /getResumeInterests Eroor ", err);
  }
};

//done
const deleteResumeInterest = async (id, idInterest) => {
  try {
    let interest = await Interest.findByPk(idInterest);
    if (!interest) {
      return `no Award with id = ${idInterest}`;
    }
    if (interest.ResumeId == id) {
      interestToDelete = await interest.destroy();
      return interestToDelete;
    }
    return `invalid id this resume do not containe Interest with id = ${idInterest} `;
  } catch (err) {
    console.log("InterestService /deleteResumeInterest Eroor ", err);
  }
};

//done
const updateResumeInterest = async (idInterest, data) => {
  try {
    let interest = await Interest.findByPk(idInterest);

    if (!interest) {
      return `no Interest with id = ${idInterest}`;
    }
    newInterest = await interest.update({ ...data });
    return newInterest;
  } catch (err) {
    console.log("InterestService /updateResumeInterest Eroor ", err);
  }
};
module.exports = {
  addResumeInterest,
  getResumeInterests,
  addResumeManyInterests,
  deleteResumeInterest,
  updateResumeInterest
};
