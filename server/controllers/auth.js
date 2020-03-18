/* User controllers */

const { authOperations } = require("../operations");

const signUp = async (req, res) => {
  try {
    const userAuth = await authOperations.signUp(req.body);
    if (!userAuth) {
      throw new Error("email already exisit");
    }
    res.status(201).json({
      status: "sucess",
      msg: "new signup created .... ",
      data: userAuth
    });
  } catch (err) {
    res.status(400).json({ status: "fail", err: err.message });
  }
};

module.exports = {
  signUp
};
