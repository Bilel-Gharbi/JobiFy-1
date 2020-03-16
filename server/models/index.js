// models
const User = require("./User");
const Resume = require("./Resume");
const Experience = require("./Experience.js");
const Education = require("./Education.js");
const Certificate = require("./Certificate.js");
const Project = require("./Project.js");
const Skill = require("./Skill");
const Language = require("./Language.js");
const Award = require("./Award.js");
const Interest = require("./Interest.js");

// Compnay Models
const Company = require("./Company");
const JobOffer = require("./JobOffer");

/* ----- User / Resume association ------- */
User.hasOne(Resume, {
  onDelete: "CASCADE",
  onUpdate: "CASCADE"
});
Resume.belongsTo(User);

/* ----- Company / JobOffer association ------- */
Company.hasMany(JobOffer, {
  onDelete: "CASCADE",
  onUpdate: "CASCADE"
});
JobOffer.belongsTo(Company);

/* -----  Resume / Experience association ------- */
Resume.hasMany(Experience);
Experience.belongsTo(Resume);

/* -----  Resume / Education association ------- */
Resume.hasMany(Education);
Education.belongsTo(Resume);

/* -----  Resume / Certificate association ------- */
Resume.hasMany(Certificate);
Certificate.belongsTo(Resume);

/* -----  Resume / Project association ------- */
Resume.hasMany(Project);
Project.belongsTo(Resume);

/* -----  Resume / Skill association ------- */
Resume.hasMany(Skill);
Skill.belongsTo(Resume);

/* --------- Job / Skill ----------------- */
JobOffer.hasMany(Skill);
Skill.belongsTo(JobOffer);

/* -----  Resume / Language association ------- */
Resume.hasMany(Language);
Language.belongsTo(Resume);

/* -----  Resume / Award association ------- */
Resume.hasMany(Award);
Award.belongsTo(Resume);

/* -----  Resume / Interst association ------- */
Resume.hasMany(Interest);
Interest.belongsTo(Resume);

module.exports = {
  User,
  Resume,
  Experience,
  Education,
  Certificate,
  Project,
  Language,
  Skill,
  Award,
  Interest,
  Company,
  JobOffer
};
