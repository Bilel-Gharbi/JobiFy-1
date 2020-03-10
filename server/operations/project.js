const { projectServices } = require("../services");

//done
const getProjects = async id => {
  try {
    result = await projectServices.getResumeProjects(id);
    return result;
  } catch (err) {
    console.log("getProjects / ProjectOperation error ", err);
  }
};
//done
const addProject = async (data, id) => {
  try {
    result = await projectServices.addResumeProject(data, id);
    return result;
  } catch (err) {
    console.log("addProject / ProjectOperation error ", err);
  }
};

//done
const addManyProjects = async (data, id) => {
  //aad the Resume id into the project
  data.map(el => {
    el.ResumeId = id;
  });

  try {
    result = await projectServices.addResumeManyProjects(data, id);
    return result;
  } catch (err) {
    console.log("addManyEducation/ ProjectOperation error ", err);
  }
};

//done
const deleteProject = async (id, idProject) => {
  try {
    result = await projectServices.deleteResumeProject(id, idProject);
    return result;
  } catch (err) {
    console.log("deleteProject / ProjectOperation error ", err);
  }
};

//done
const updateProject = async (idProject, data) => {
  try {
    result = await projectServices.updateResumeProject(idProject, data);
    return result;
  } catch (err) {
    console.log("updateProject / ProjectOperation error ", err);
  }
};

module.exports = {
  getProjects,
  addProject,
  addManyProjects,
  deleteProject,
  updateProject
};
