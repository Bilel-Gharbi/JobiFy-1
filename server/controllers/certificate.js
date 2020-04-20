/* User controllers */

const { certificateOperations } = require("../operations");

//get all project for resume
const getResumeCertificates = async (req, res) => {
  try {
    certificates = await certificateOperations.getCertificates(req.params.id);
    res.status(200).json({
      status: "sucess",
      msg: `all certificates for Resume with id ${req.params.id}`,
      length: certificates.length,
      data: certificates,
    });
  } catch (err) {
    res.status(400).json(err);
  }
};
//add one project to resume
const addResumeCertificate = async (req, res) => {
  try {
    newCertificate = await certificateOperations.addCertificate(
      req.body,
      req.params.id
    );
    res.status(201).json({
      status: "sucess",
      msg: `new certificate added to Resume with id ${req.params.id}`,
      newCertificate,
    });
  } catch (err) {
    res.status(400).json(err);
  }
};

//add many experiences to resume
const addResumeManyCertificates = async (req, res) => {
  try {
    listCertificates = await certificateOperations.addManyCertificates(
      req.body,
      req.params.id
    );
    res.status(201).json({
      status: "sucess",
      msg: `Many certificates added to Resume with id ${req.params.id}`,
      data: listCertificates,
    });
  } catch (err) {
    res.status(400).json(err);
  }
};
// delete one education from resume
const deleteResumeCertificate = async (req, res) => {
  const { id_certificate, id } = req.params;
  try {
    let deletedCertificate = await certificateOperations.deleteCertificate(
      id,
      id_certificate
    );
    res.status(202).json({
      status: "sucess",
      msg: `Certificate ${req.params.id_certificate} deleted for the Resume with id ${req.params.id}`,
      deletedCertificate,
    });
  } catch (err) {
    res.status(400).json(err);
  }
};

//update one experience from resume
const updateResumeCertificate = async (req, res) => {
  const { id_certificate } = req.params;
  try {
    newCertificate = await certificateOperations.updateCertificate(
      id_certificate,
      req.body
    );
    res.status(200).json({
      status: "sucess",
      msg: `Certificate ${req.params.id_certificate} updated for the Resume with id ${req.params.id}`,
      newCertificate,
    });
  } catch (err) {
    res.status(400).json(err);
  }
};

module.exports = {
  addResumeCertificate,
  addResumeManyCertificates,
  deleteResumeCertificate,
  updateResumeCertificate,
  getResumeCertificates,
};
