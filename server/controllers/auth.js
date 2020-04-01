/* User controllers */

const { authOperations } = require("../operations");
const { verifyToken, decodeToken, signNewToken } = require("../helper");
const signUp = async (req, res) => {
  try {
    const result = await authOperations.signUp(req.body);
    if (!result) {
      throw new Error("email already exisit");
    }
    res.status(201).json({
      status: "sucess",
      msg: "new signup created .... ",
      result
    });
  } catch (err) {
    res.status(400).json({ status: "fail", err: err.message });
  }
};

const login = async (req, res) => {
  try {
    const result = await authOperations.login(req.body);
    if (!result) {
      throw new Error("invalid username or password");
    }
    res.status(201).json({
      status: "sucess",
      msg: "you logged in succesufly .... ",
      result
    });
  } catch (err) {
    res.status(401).json({ status: "fail", err: err.message });
  }
};

const fetchAuthData = async (req, res) => {
  try {
    const requestToken = req.headers["x-auth-token"];
    const result = await authOperations.fetchAuthData(requestToken);
    if (!result) {
      throw new Error("invalid token");
    }
    res.status(201).json({
      status: "sucess",
      msg: "you still login with new token ",
      result
    });
  } catch (err) {
    res.status(401).json({ status: "fail", err: err.message });
  }
};

module.exports = {
  signUp,
  login,
  fetchAuthData
};
