/* User controllers */

const { companyOperations, resumeOperations } = require("../operations");

const getAllCompany = async (req, res) => {
  try {
    companies = await companyOperations.getAllCompany();
    res.status(200).json({
      status: "sucess",
      msg: "get all companies",
      length: companies.length,
      data: companies,
    });
  } catch (err) {
    res.status(401).json({ status: "fail", msg: err });
  }
};

const createNewCompany = async (req, res) => {
  try {
    newCompany = await companyOperations.createNewCompany(req.body);
    res.status(201).json({
      status: "sucess",
      msg: "new company created .... ",
      length: newCompany.length,
      data: newCompany,
    });
  } catch (err) {
    res.status(401).json({ status: "fail", msg: err });
  }
};

const createCompanyInfo = async (req, res) => {
  const { authId } = req.params;
  let filePath;
  req.file ? (filePath = req.file.path) : null;

  try {
    companyInfo = await companyOperations.createCompnayInfo(
      authId,
      req.body,
      filePath
    );
    res.status(201).json({
      status: "sucess",
      msg: `init company info with auth id ${authId} .... `,
      data: companyInfo,
    });
  } catch (err) {
    res.status(400).json(err);
  }
};

const activateCompanyProfile = async (req, res) => {
  try {
    let result = companyOperations.activateCompanyProfile(req.query.id);
    res.status(201).json({
      status: "sucess",
      msg: `company Profile with id ${req.query.id} activated`,
      result,
    });
  } catch (err) {
    res.status(401).json({ status: "fail", err: err.message });
  }
};

const getCompanyApplication = async (req, res) => {
  try {
    applications = await companyOperations.getCompanyApplication(req.params.id);
    res.status(200).json({
      status: "sucess",
      msg: "get Company Application",
      length: applications.length,
      applications,
    });
  } catch (err) {
    res.status(401).json({ status: "fail", msg: err });
  }
};

const getResumeDetailsForApplication = async (req, res) => {
  try {
    resumeCandidate = await resumeOperations.getResumeDetailsForApplication(
      req.params.resumeId
    );

    res.status(200).json({
      status: "sucess",
      msg: "get candidate Resume Details",
      resumeCandidate,
    });
  } catch (err) {
    res.status(401).json({ status: "fail", msg: err });
  }
};

const acceptOrRejectCandidate = async (req, res) => {
  try {
    const { accept } = req.query;
    const { id } = req.params;

    application = await companyOperations.acceptOrRejectCandidate(
      JSON.parse(accept),
      id
    );

    res.status(200).json({
      status: "sucess",
      msg: "application updated",
      application,
    });
  } catch (err) {
    res.status(401).json({ status: "fail", msg: err });
  }
};
module.exports = {
  getAllCompany,
  createNewCompany,
  createCompanyInfo,
  activateCompanyProfile,
  getCompanyApplication,
  getResumeDetailsForApplication,
  acceptOrRejectCandidate,
};
