const { certificateServices } = require("../services");

//done
const getCertificates = async id => {
  try {
    result = await certificateServices.getResumeCertificates(id);
    return result;
  } catch (err) {
    console.log("getCertificates/ CertificateOperation error ", err);
  }
};
//done
const addCertificate = async (data, id) => {
  try {
    result = await certificateServices.addResumeCertificate(data, id);
    return result;
  } catch (err) {
    console.log("addProject / CertificateOperation error ", err);
  }
};

//done
const addManyCertificates = async (data, id) => {
  //aad the Resume id into the project
  data.map(el => {
    el.ResumeId = id;
  });

  try {
    result = await certificateServices.addResumeManyCertificates(data, id);
    return result;
  } catch (err) {
    console.log("addManyEducation/ CertificateOperation error ", err);
  }
};

//done
const deleteCertificate = async (id, idCertificate) => {
  try {
    result = await certificateServices.deleteResumeCertificate(
      id,
      idCertificate
    );
    return result;
  } catch (err) {
    console.log("deleteProject / CertificateOperation error ", err);
  }
};

//done
const updateCertificate = async (idCertificate, data) => {
  try {
    result = await certificateServices.updateResumeCertificate(
      idCertificate,
      data
    );
    return result;
  } catch (err) {
    console.log("updateProject / CertificateOperation error ", err);
  }
};

module.exports = {
  getCertificates,
  addCertificate,
  addManyCertificates,
  deleteCertificate,
  updateCertificate
};
