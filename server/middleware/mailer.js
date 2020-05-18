const nodemailer = require("nodemailer");
const { jobiFyMail, jobiFyMailPwd } = require("../config");

const { Auth, Company } = require("../models");

const sendCandidateMail = async (req, res, next) => {
  console.log(req.body);

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

      const mailOptions = {
        from: jobiFyMail,
        to: "hb.bilel@gmail.com",
        subject: `Application for ${jobPosition}`,
        html: `<p>your candidate for position ${jobPosition} has been accepted by the recruter of the company.
         </br>
         message:  ${data.mail}
         </br>
         <b>interview date : ${data.interviewDate} </b>
         
         </p>`,
      };

      transporter.sendMail(mailOptions, (err, info) => {
        if (err) console.log(err);
        else console.log(info);
      });

      console.log(companyMail);
      console.log(userMail);
      console.log(jobPosition);
      console.log(data);
    }
  } catch (err) {
    console.log(err);
  }
  next();
};

module.exports = sendCandidateMail;
