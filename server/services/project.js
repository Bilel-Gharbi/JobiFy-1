//import Resume model from models/index.js file
const { Resume, Project } = require("../models");

//done
const addResumeProject = async (data, id) => {
  // console.log(data);
  try {
    await Project.sync({ force: false });
    let resume = await Resume.findByPk(id);
    let newProject = await resume.createProject({ ...data });
    return newProject;
  } catch (err) {
    console.log("ProjectService /addResumeProject Eroor ", err);
  }
};

//done
const addResumeManyProjects = async (data, id) => {
  try {
    await Project.sync({ force: false });
    let newProjects = await Project.bulkCreate(data);
    return newProjects;
  } catch (err) {
    console.log("ProjectServices /addResumeManyProjects Eroor ", err);
  }
};
//done
const getResumeProjects = async id => {
  //console.log(Project.prototype);
  try {
    let resume = await Resume.findByPk(id);
    let allProjects = await resume.getProjects();
    return allProjects;
  } catch (err) {
    console.log("ProjectServices /getResumeProject Eroor ", err);
  }
};

//done
const deleteResumeProject = async (id, idProject) => {
  //check the resume id before deleted
  try {
    let project = await Project.findByPk(idProject);
    if (!project) {
      return `no project with id = ${idProject}`;
    }
    //check the resumeid before deleting
    if (project.ResumeId == id) {
      projectToDelete = await project.destroy();
      return projectToDelete;
    }
    return `invalid this resume do not containe project with ${idProject} `;
  } catch (err) {
    console.log("ProjectServices /deleteResumeProject Eroor ", err);
  }
};

//done
const updateResumeProject = async (idProject, data) => {
  try {
    let project = await Project.findByPk(idProject);
    if (!project) {
      return `no project with id = ${idProject}`;
    }
    newProject = await project.update({ ...data });
    return newProject;
  } catch (err) {
    console.log("ProjectServices /updateResumeProject Eroor ", err);
  }
};

module.exports = {
  addResumeProject,
  getResumeProjects,
  addResumeManyProjects,
  deleteResumeProject,
  updateResumeProject
};
