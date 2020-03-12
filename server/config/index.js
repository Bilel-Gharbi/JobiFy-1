const dotenv = require("dotenv");
dotenv.config();
module.exports = {
  PORT: process.env.PORT || 5000,
  datbaseURL: process.env.DATABASEHOST,
  datbaseUserName: process.env.DATABASEUSER,
  datbaseName: process.env.DATABASENAME,
  databasePwd: process.env.DATABASEPASSWORD
};
