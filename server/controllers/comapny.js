/* User controllers */

const { companyOperations } = require("../operations");

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
module.exports = {
  getAllCompany,
  createNewCompany,
  createCompanyInfo,
  activateCompanyProfile,
};
