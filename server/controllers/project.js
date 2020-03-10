/* User controllers */

const { projectOperations } = require("../operations");

//get all project for resume
const getResumeProjects = async (req, res) => {
  try {
    projects = await projectOperations.getProjects(req.params.id);
    res.status(200).json({
      status: "sucess",
      msg: `all projects for Resume with id ${req.params.id}`,
      length: projects.length,
      data: projects
    });
  } catch (err) {
    res.status(400).json(err);
  }
};
//add one project to resume
const addResumeProject = async (req, res) => {
  try {
    newProject = await projectOperations.addProject(req.body, req.params.id);
    res.status(201).json({
      status: "sucess",
      msg: `new project added to Resume with id ${req.params.id}`,
      newProject
    });
  } catch (err) {
    res.status(400).json(err);
  }
};

//add many experiences to resume
const addResumeManyProjects = async (req, res) => {
  try {
    listProjects = await projectOperations.addManyProjects(
      req.body,
      req.params.id
    );
    res.status(201).json({
      status: "sucess",
      msg: `Many projects added to Resume with id ${req.params.id}`,
      data: listProjects
    });
  } catch (err) {
    res.status(400).json(err);
  }
};
// delete one education from resume
const deleteResumeProject = async (req, res) => {
  const { id_project, id } = req.params;
  try {
    let deletedProject = await projectOperations.deleteProject(id, id_project);
    res.status(202).json({
      status: "sucess",
      msg: `project ${req.params.id_education} deleted for the Resume with id ${req.params.id}`,
      deletedProject
    });
  } catch (err) {
    res.status(400).json(err);
  }
};

//update one experience from resume
const updateResumeProject = async (req, res) => {
  const { id_project } = req.params;
  try {
    newProject = await projectOperations.updateProject(id_project, req.body);
    res.status(200).json({
      status: "sucess",
      msg: `Project ${req.params.id_project} updated for the Resume with id ${req.params.id}`,
      newProject
    });
  } catch (err) {
    res.status(400).json(err);
  }
};

module.exports = {
  addResumeProject,
  addResumeManyProjects,
  deleteResumeProject,
  updateResumeProject,
  getResumeProjects
};
