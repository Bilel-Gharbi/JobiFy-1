//import Resume model from models/index.js file
const { Resume, Language } = require("../models");

//done
const addResumeLanguage = async (data, id) => {
  try {
    let resume = await Resume.findByPk(id);
    await Language.sync({ force: false });
    //console.log(resume);
    let newLanguage = await resume.createLanguage({ ...data });
    return newLanguage;
  } catch (err) {
    console.log("LanguageService /addResumeLanguage Eroor ", err);
  }
};
const addResumeManyLanguages = async data => {
  try {
    await Language.sync({ force: false });
    let newLangauges = await Language.bulkCreate(data);
    return newLangauges;
  } catch (err) {
    console.log("LanguageService /addResumeManyLanguages Eroor ", err);
  }
};
//done
const getResumeLanaguages = async id => {
  try {
    let resume = await Resume.findByPk(id);
    let allLanguages = await resume.getLanguages();
    return allLanguages;
  } catch (err) {
    console.log("LanguageService /getResumeLangauges Eroor ", err);
  }
};

//done
const deleteResumeLanguage = async (id, idLanguage) => {
  try {
    let language = await Language.findByPk(idLanguage);
    if (!language) {
      return `no Language with id = ${idLanguage}`;
    }
    if (language.ResumeId == id) {
      languageToDelete = await language.destroy();
      return languageToDelete;
    }
    return `invalid id this resume do not containe Langauge with id = ${idLanguage} `;
  } catch (err) {
    console.log("LangaugeService /deleteResumeLanguage Eroor ", err);
  }
};

//done
const updateResumeLanguage = async (idLanguage, data) => {
  console.log(data);
  console.log(idLanguage);
  try {
    let language = await Language.findByPk(idLanguage);

    if (!language) {
      return `no language with id = ${idLanguage}`;
    } else {
      newLanguage = await language.update({ ...data });
      return newLanguage;
    }
  } catch (err) {
    console.log("LanguageService /updateResumeLanguage Eroor ", err);
  }
};
module.exports = {
  addResumeLanguage,
  getResumeLanaguages,
  addResumeManyLanguages,
  deleteResumeLanguage,
  updateResumeLanguage
};
