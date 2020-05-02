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
const Applicant = require("./Applicant.js");

// Compnay Models
const Company = require("./Company");
const JobOffer = require("./JobOffer");

//Auth model
const Auth = require("./Auth");
/* ----- Auth / User association ------- */
Auth.hasOne(User, {
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});
User.belongsTo(Auth);

/* ------- Auth / Company association ------- */
Auth.hasOne(Company, {
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});
Company.belongsTo(Auth);

/* ----- User / Resume association ------- */
User.hasOne(Resume, {
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});
Resume.belongsTo(User);

/* ----- Company / JobOffer association ------- */
Company.hasMany(JobOffer, {
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
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

/* --------- Job / AppliedJOB / Resume  ----------------- */
JobOffer.hasMany(Applicant);
Applicant.belongsTo(JobOffer);

Resume.hasMany(Applicant);
Applicant.belongsTo(Resume);

/* -----  Resume / Language association ------- */
Resume.hasMany(Language);
Language.belongsTo(Resume);

/* -----  Resume / Award association ------- */
Resume.hasMany(Award);
Award.belongsTo(Resume);

/* -----  Resume / Interst association ------- */
Resume.hasMany(Interest);
Interest.belongsTo(Resume);

/* Auth.sync({ force: false });
User.sync({ force: false });
JobOffer.sync({ force: true });
Skill.sync({ force: true });
Company.sync({ force: false });
Applicant.sync({ force: false });
Resume.sync({ force: false });
Experience.sync({ force: false });
Language.sync({ force: false });
Education.sync({ force: false });
Award.sync({ force: false });
Project.sync({ force: false });
Interest.sync({ force: false });
Certificate.sync({ force: false });
Skill.sync({ force: false });
*/

//console.log(Company.prototype);

module.exports = {
  Auth,
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
  JobOffer,
  Applicant,
};
