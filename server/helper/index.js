const jwt = require("jsonwebtoken");
const { jwtSecretKey, TokenExpDate } = require("../config");

const signNewToken = async (data) => {
  console.log(jwtSecretKey);
  let newToken = await jwt.sign(data, jwtSecretKey, {
    expiresIn: TokenExpDate,
  });

  return newToken;
};

const verifyToken = async (token) => {
  try {
    let result = jwt.verify(token, jwtSecretKey);
    return result;
  } catch (err) {
    return err;
  }
};
//to add  job skills in operation get all job
const adjResultFormating = async (result, service) => {
  //loop throughth job table use getJobOfferSkills service to get skills for each job
  skillsTab = [];
  for (let i = 0; i < result.rows.length; i++) {
    let jobSkills = await service.getJobOfferSkills(
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
};

//to re adj the the result of search and formating
const adjResultForSearchBySkill = async (result, service) => {
  //loop throughth job table use getJobOfferSkills service to get skills for each job
  skillsTab = [];
  // adj reslult
  let data = result.rows.map((el) => {
    return el.JobOffer;
  });

  for (let i = 0; i < data.length; i++) {
    let jobSkills = await service.getJobOfferSkills(data[i].dataValues.id);
    skillsTab.push(jobSkills);
  }
  //Modify the result table that contain all job offer bu adding new key jobSkills include the skills related to this jobOffer
  data.map((el, i) => {
    el.dataValues["jobSkills"] = skillsTab[i];
  });
  //return jobOffer

  result.rows = data;
  return result;
};
module.exports.signNewToken = signNewToken;
module.exports.verifyToken = verifyToken;
module.exports.adjResultFormating = adjResultFormating;
module.exports.adjResultForSearchBySkill = adjResultForSearchBySkill;
