//import Resume model from models/index.js file
const { Company, JobOffer, Skill } = require("../models");
const { adjResultFormatingCompnayJobOffers } = require("../helper/");

const Sequelize = require("Sequelize");
const Op = Sequelize.Op;

const getAllJobOffers = async () => {
  try {
    let jobs = await JobOffer.findAll({
      include: [
        {
          model: Company,
        },
      ],
    });
    return jobs;
  } catch (err) {
    console.log("JobOfferService /getAllJobOffer Eroor ", err);
  }
};

//service used in middleware
const paginateAllJobOffers = async (limit, offset) => {
  try {
    let jobs = await JobOffer.findAndCountAll({
      include: [
        {
          model: Company,
        },
      ],
      offset,
      limit,
    });

    return jobs;
  } catch (err) {
    console.log("JobOfferService /getAllJobOffer Eroor ", err);
  }
};

//search by job position
const searchJobOffersByJobPosition = async (term, limit, offset) => {
  try {
    let jobs = await JobOffer.findAndCountAll({
      where: {
        jobPosition: { [Op.like]: "%" + term + "%" },
      },
      include: [
        {
          model: Company,
        },
      ],
      offset,
      limit,
    });

    return jobs;
  } catch (err) {
    console.log("JobOfferService /searchJobOffers Eroor ", err);
  }
};

//search by location
const searchJobOffersByLocation = async (term, limit, offset) => {
  try {
    let jobs = await JobOffer.findAndCountAll({
      include: [
        {
          model: Company,
          where: {
            location: { [Op.like]: "%" + term + "%" },
          },
        },
      ],
      offset,
      limit,
    });

    return jobs;
  } catch (err) {
    console.log("JobOfferService /searchJobOffersByLocation Eroor ", err);
  }
};

//search by location
const searchJobOffersByContract = async (term, limit, offset) => {
  try {
    let jobs = await JobOffer.findAndCountAll({
      where: {
        JobContractType: term,
      },
      include: [
        {
          model: Company,
        },
      ],
      offset,
      limit,
    });

    return jobs;
  } catch (err) {
    console.log("JobOfferService /searchJobOffersByContract Eroor ", err);
  }
};

//search by skill
const searchJobOffersBySkill = async (term, limit, offset) => {
  console.log(term);
  try {
    let skills = await Skill.findAndCountAll({
      where: {
        name: { [Op.like]: "%" + term + "%" },
        ResumeId: null,
      },
      include: [
        {
          model: JobOffer,
          include: [{ model: Company }],
        },
      ],
      offset,
      limit,
    });
    return skills;
  } catch (err) {
    console.log("JobOfferService /searchJobOffersBySkill Eroor ", err);
  }
};

/////////////
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

const getCompanyJobOffers = async (id) => {
  try {
    let company = await Company.findByPk(id);
    let allJobOffers = await company.getJobOffers();
    let jobOffers = await adjResultFormatingCompnayJobOffers(
      allJobOffers,
      getJobOfferSkills
    );
    return jobOffers;
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
    if (jobOffer.CompanyId == id) {
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

//add skills to job offer
//done
const addSkillToJobOffer = async (idJobOffer, data) => {
  try {
    let jobOffer = await JobOffer.findByPk(idJobOffer);
    await Skill.sync({ force: false });
    let newJobSkill = await jobOffer.createSkill({ ...data });
    return newJobSkill;
  } catch (err) {
    console.log("JobOfferService /addSkillsToJobOffer Eroor ", err);
  }
};
//Add many skills to job offer
//done
const addManySkillsToJobOffer = async (data, idJobOffer) => {
  try {
    await Skill.sync({ force: false });
    let newJobSkills = await Skill.bulkCreate(data);
    let jobs = await getAllJobOffers(idJobOffer);
    return jobs;
  } catch (err) {
    console.log("JobOfferService /addManySkillsToJobOffer Eroor ", err);
  }
};

const getJobOfferSkills = async (id) => {
  try {
    let jobOffer = await JobOffer.findByPk(id);
    let allJobOfferSkills = await jobOffer.getSkills();
    return allJobOfferSkills;
  } catch (err) {
    console.log("JobOfferService /getCompanyJobOffer Eroor ", err);
  }
};
module.exports = {
  getAllJobOffers,
  paginateAllJobOffers,
  addCompanyJobOffer,
  getCompanyJobOffers,
  deleteCompanyJobOffer,
  updateCompanyJobOffer,
  addSkillToJobOffer,
  addManySkillsToJobOffer,
  getJobOfferSkills,
  searchJobOffersByJobPosition,
  searchJobOffersByLocation,
  searchJobOffersBySkill,
  searchJobOffersByContract,
};
