const dotenv = require("dotenv");
const cloudinary = require("cloudinary");
dotenv.config();

module.exports = {
  //Server config
  PORT: process.env.PORT || 5000,

  //DataBase config
  datbaseURL: process.env.DATABASELOCALHOST || process.env.DATABASEHOST,
  datbaseUserName: process.env.DATABASEUSERLOCAL || process.env.DATABASEUSER,
  datbaseName: process.env.DATABASENAMELOCAL || process.env.DATABASENAME,
  databasePwd:
    process.env.DATABASEPASSWORDLOCAL || process.env.DATABASEPASSWORD,

  //JWT config
  jwtSecretKey: process.env.JWTSECRETKEY,
  TokenExpDate: process.env.TokenExpDate,

  //nodeMail
  jobiFyMail: process.env.JOBIFYMAIL,
  jobiFyMailPwd: process.env.JOBIFYMAILPWD,
};

//cloudPhoto config
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_CLOUD_KEY,
  api_secret: process.env.API_CLOUD_SECRET_KEY,
});
