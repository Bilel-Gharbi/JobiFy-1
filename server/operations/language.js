const { languageServices } = require("../services");

//done
const getLanguages = async id => {
  try {
    result = await languageServices.getResumeLanaguages(id);
    return result;
  } catch (err) {
    console.log("getLangauges / languagesOperations error ", err);
  }
};
//done
const addLanguage = async (data, id) => {
  try {
    result = await languageServices.addResumeLanguage(data, id);
    return result;
  } catch (err) {
    console.log("addLangauge / LangaugeOperations error ", err);
  }
};

//done
const addManyLanguages = async (data, id) => {
  //aad the Resume id into the project
  data.map(el => {
    el.ResumeId = id;
  });

  try {
    result = await languageServices.addResumeManyLanguages(data, id);
    return result;
  } catch (err) {
    console.log("addManyLanguages/ LanguageOperations error ", err);
  }
};

//done
const deleteLanguage = async (id, idLanguage) => {
  try {
    result = await languageServices.deleteResumeLanguage(id, idLanguage);
    return result;
  } catch (err) {
    console.log("deletelanguage/ LanguageOperations error ", err);
  }
};

//done
const updateLanguage = async (idLanguage, data) => {
  try {
    result = await languageServices.updateResumeLanguage(idLanguage, data);
    return result;
  } catch (err) {
    console.log("updateLanguage / LanguageOperations error ", err);
  }
};

module.exports = {
  getLanguages,
  addLanguage,
  addManyLanguages,
  deleteLanguage,
  updateLanguage
};
