const jwt = require("jsonwebtoken");
const { promisify } = require("util");
const { jwtSecretKey } = require("../config");

const verifyToken = async (req, res, next) => {
  if (req.headers["x-auth-token"]) {
    try {
      await promisify(jwt.verify)(req.headers["x-auth-token"], jwtSecretKey);
      let decodedToken = await jwt.decode(req.headers["x-auth-token"]);
    } catch (err) {
      res.status(401).json({ err: err.message });
    }
    next();
  }
};

/* const decodeToken = async (req, res, next) => {
  if (req.headers["x-auth-token"]) {
    try {
      let decodedToken = await jwt.decode(req.headers["x-auth-token"]);
      console.log(decodedToken);
    } catch (err) {
      res.status(401).json({ err: err.message });
    }
    next();
  }
}; */

module.exports = verifyToken;
