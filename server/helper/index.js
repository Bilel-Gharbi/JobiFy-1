const jwt = require("jsonwebtoken");
const { jwtSecretKey, TokenExpDate } = require("../config");

const signNewToken = async data => {
  console.log(jwtSecretKey);
  let newToken = await jwt.sign(data, jwtSecretKey, {
    expiresIn: TokenExpDate
  });

  return newToken;
};

const verifyToken = async token => {
  try {
    let result = jwt.verify(token, jwtSecretKey);
    return result;
  } catch (err) {
    return err;
  }
};

module.exports.signNewToken = signNewToken;
module.exports.verifyToken = verifyToken;
