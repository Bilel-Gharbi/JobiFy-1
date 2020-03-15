const { languageOperations } = require("../operations");

//get all awards for resume
const getResumeLanguages = async (req, res) => {
  try {
    languages = await languageOperations.getLanguages(req.params.id);
    res.status(200).json({
      status: "sucess",
      msg: `all langauges for Resume with id ${req.params.id}`,
      length: languages.length,
      data: languages
    });
  } catch (err) {
    res.status(401).json(err);
  }
};
//add one award to resume
const addResumeLanguage = async (req, res) => {
  try {
    newLanguage = await languageOperations.addLanguage(req.body, req.params.id);
    res.status(201).json({
      status: "sucess",
      msg: `new language added to Resume with id ${req.params.id}`,
      newLanguage
    });
  } catch (err) {
    res.status(401).json(err);
  }
};

//add many awards to resume
const addResumeManyLanguages = async (req, res) => {
  try {
    listLanguages = await languageOperations.addManyLanguages(
      req.body,
      req.params.id
    );
    res.status(201).json({
      status: "sucess",
      msg: `Many languages added to Resume with id ${req.params.id}`,
      data: listLanguages
    });
  } catch (err) {
    res.status(401).json(err);
  }
};
// delete one award from resume
const deleteResumeLanguage = async (req, res) => {
  const { id_language, id } = req.params;
  try {
    let deletedLanguage = await languageOperations.deleteLanguage(
      id,
      id_language
    );
    res.status(202).json({
      status: "sucess",
      msg: `Language ${req.params.id_language} deleted for the Resume with id ${req.params.id}`,
      deletedLanguage
    });
  } catch (err) {
    res.status(401).json(err);
  }
};

//update award
const updateResumeLanguage = async (req, res) => {
  const { id_language } = req.params;
  try {
    newLanguage = await languageOperations.updateLanguage(
      id_language,
      req.body
    );
    res.status(200).json({
      status: "sucess",
      msg: `Language ${req.params.id_language} updated for the Resume with id ${req.params.id}`,
      newLanguage
    });
  } catch (err) {
    res.status(401).json(err);
  }
};

module.exports = {
  addResumeLanguage,
  addResumeManyLanguages,
  deleteResumeLanguage,
  updateResumeLanguage,
  getResumeLanguages
};
