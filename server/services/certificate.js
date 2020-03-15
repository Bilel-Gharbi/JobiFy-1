//import Resume model from models/index.js file
const { Resume, Certificate } = require("../models");

//done
const addResumeCertificate = async (data, id) => {
  try {
    await Certificate.sync({ force: false });
    let resume = await Resume.findByPk(id);
    let newCertificate = await resume.createCertificate({ ...data });
    return newCertificate;
  } catch (err) {
    console.log("CertificateService /addResumeCertificate Eroor ", err);
  }
};
const addResumeManyCertificates = async (data, id) => {
  try {
    await Certificate.sync({ force: false });
    let newCertificates = await Certificate.bulkCreate(data);
    return newCertificates;
  } catch (err) {
    console.log("CertificateService /addResumeManyCertificates Eroor ", err);
  }
};
//done
const getResumeCertificates = async id => {
  try {
    let resume = await Resume.findByPk(id);
    let allCertificates = await resume.getCertificates();
    return allCertificates;
  } catch (err) {
    console.log("CertificateService /getResumeCertificate Eroor ", err);
  }
};

//done
const deleteResumeCertificate = async (id, idCertificate) => {
  try {
    let certificate = await Certificate.findByPk(idCertificate);
    if (!certificate) {
      return `no certificate with id = ${idCertificate}`;
    }
    if (certificate.ResumeId == id) {
      certificateToDelete = await certificate.destroy();
      return certificateToDelete;
    }
    return `invalid id this resume do not containe certificate with ${idCertificate} `;
  } catch (err) {
    console.log("CertificateService /deleteResumeCertificate Eroor ", err);
  }
};

//done
const updateResumeCertificate = async (idCertificate, data) => {
  try {
    let certificate = await Certificate.findByPk(idCertificate);
    if (!certificate) {
      return `no certificate with id = ${idCertificate}`;
    }
    newCertificate = await certificate.update({ ...data });
    return newCertificate;
  } catch (err) {
    console.log("CertificateService /updateResumeCertificate Eroor ", err);
  }
};
module.exports = {
  addResumeCertificate,
  getResumeCertificates,
  addResumeManyCertificates,
  deleteResumeCertificate,
  updateResumeCertificate
};
