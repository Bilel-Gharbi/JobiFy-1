const dotenv = require("dotenv");
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
  TokenExpDate: process.env.TokenExpDate
};
