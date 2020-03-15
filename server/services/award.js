//import Resume model from models/index.js file
const { Resume, Award } = require("../models");

//done
const addResumeAward = async (data, id) => {
  console.log("service");
  try {
    await Award.sync({ force: false });
    let resume = await Resume.findByPk(id);
    //console.log(resume);
    let newAward = await resume.createAward({ ...data });
    return newAward;
  } catch (err) {
    console.log("AwardService /addResumeAward Eroor ", err);
  }
};
const addResumeManyAwards = async (data, id) => {
  try {
    await Award.sync({ force: false });
    let newAwards = await Award.bulkCreate(data);
    return newAwards;
  } catch (err) {
    console.log("AwardService /addResumeManyAwards Eroor ", err);
  }
};
//done
const getResumeAwards = async id => {
  try {
    let resume = await Resume.findByPk(id);
    let allAwards = await resume.getAwards();
    return allAwards;
  } catch (err) {
    console.log("AwardService /getResumeAwards Eroor ", err);
  }
};

//done
const deleteResumeAward = async (id, idAward) => {
  try {
    let award = await Award.findByPk(idAward);
    if (!award) {
      return `no Award with id = ${idAward}`;
    }
    if (award.ResumeId == id) {
      awardToDelete = await award.destroy();
      return awardToDelete;
    }
    return `invalid id this resume do not containe award with id = ${idAward} `;
  } catch (err) {
    console.log("AwardService /deleteResumeAward Eroor ", err);
  }
};

//done
const updateResumeAward = async (idAward, data) => {
  try {
    let award = await Award.findByPk(idAward);

    if (!award) {
      return `no Award with id = ${idAward}`;
    }
    newAward = await award.update({ ...data });
    return newAward;
  } catch (err) {
    console.log("AwardService /updateResumeAward Eroor ", err);
  }
};
module.exports = {
  addResumeAward,
  getResumeAwards,
  addResumeManyAwards,
  deleteResumeAward,
  updateResumeAward
};
