const { educationServices } = require("../services");

//done
const getEducations = async id => {
  console.log(id);
  try {
    result = await educationServices.getResumeEducations(id);
    return result;
  } catch (err) {
    console.log("getEducations / EducationOperation error ", err);
  }
};
//done
const addEducation = async (data, id) => {
  //check if user's in position or note
  //!data.endDate ? (data.current = true) : (data.current = false);
  try {
    result = await educationServices.addResumeEducation(data, id);
    return result;
  } catch (err) {
    console.log("addEducation/ EducationOperation error ", err);
  }
};

//add many experiences
const addManyEducations = async (data, id) => {
  //aad the Resume id into the experience
  data.map(el => {
    el.ResumeId = id;
  });

  try {
    result = await educationServices.addResumeManyEducations(data, id);
    return result;
  } catch (err) {
    console.log("addManyEducation/ EducationOperation error ", err);
  }
};

//done
const deleteEducation = async (id, idEducation) => {
  try {
    result = await educationServices.deleteResumeEducation(id, idEducation);
    return result;
  } catch (err) {
    console.log("deleteEducation / EducationOperation error ", err);
  }
};

//done
const updateEducation = async (idEducation, data) => {
  try {
    result = await educationServices.updateResumeEducation(idEducation, data);
    return result;
  } catch (err) {
    console.log("updateEducation / EducationOperation error ", err);
  }
};

module.exports = {
  getEducations,
  addEducation,
  addManyEducations,
  deleteEducation,
  updateEducation
};
