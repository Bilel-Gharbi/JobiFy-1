const nodemailer = require("nodemailer");
const { jobiFyMail, jobiFyMailPwd } = require("../config");

const { Auth, Company } = require("../models");
const interviewMailTemplate = require("../helper/interviewMailTemplate");

const sendCandidateMail = async (req, res, next) => {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: jobiFyMail,
      pass: jobiFyMailPwd,
    },
  });
  try {
    if (req.body) {
      const { application, data } = req.body;
      let company = await Company.findByPk(application.JobOffer.CompanyId);
      let UserAuth = await Auth.findByPk(application.Resume.User.AuthId);
      let companyAuth = await Auth.findByPk(company.AuthId);

      const jobPosition = application.JobOffer.jobPosition;
      const companyMail = companyAuth.email;
      const userMail = UserAuth.email;
      const userName = application.Resume.User.firstName;

      const mailOptions = {
        from: jobiFyMail,
        to: "hb.bilel@gmail.com",
        subject: `Application for ${jobPosition}`,
        html: interviewMailTemplate(userName, data, jobPosition),
      };

      transporter.sendMail(mailOptions, (err, info) => {
        if (err) console.log(err);
        else console.log(info);
      });
    }
  } catch (err) {
    console.log(err);
  }
  next();
};

module.exports = sendCandidateMail;
