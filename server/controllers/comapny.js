/* User controllers */

const { companyOperations } = require("../operations");

const getAllCompany = async (req, res) => {
  try {
    companies = await companyOperations.getAllCompany();
    res.status(200).json({
      status: "sucess",
      msg: "get all companies",
      length: companies.length,
      data: companies
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
      data: newCompany
    });
  } catch (err) {
    res.status(401).json({ status: "fail", msg: err });
  }
};

module.exports = {
  getAllCompany,
  createNewCompany
};
