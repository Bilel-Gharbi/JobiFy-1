/* User controllers */

const { authOperations } = require("../operations");

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

module.exports = {
  signUp,
  login
};
