// models
const User = require("./User");
const Resume = require("./Resume");
const Experience = require("./Experience");
const Education = require("./Education");
const Certificate = require("./Certificate");
const Project = require("./Project");
const Skill = require("./Skill");
const Language = require("./Language");
const Award = require("./Award");

/* ----- User / Resume association ------- */
User.hasOne(Resume, {
  onDelete: "CASCADE",
  onUpdate: "CASCADE"
});
Resume.belongsTo(User);

//console.log(User.prototype);
//console.log(Resume.prototype);
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

/* -----  Resume / Language association ------- */
Resume.hasMany(Language);
Language.belongsTo(Resume);

/* -----  Resume / Award association ------- */
Resume.hasMany(Award);
Award.belongsTo(Resume);

//console.log(Award.prototype);
//console.log(Certificate.prototype);
//console.log(Project.prototype);
console.log(Resume.prototype);
//console.log(User.prototype);
//console.log(Education.prototype);
//console.log(User.prototype);
module.exports = {
  User,
  Resume,
  Experience,
  Education,
  Certificate,
  Project,
  Language,
  Skill,
  Award
};
