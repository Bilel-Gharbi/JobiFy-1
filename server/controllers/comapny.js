/* User controllers */

const { userOperations } = require("../operations");
const data = require("../fakeUserData");

const getAllComapny = async (req, res) => {
  try {
    companies = await userOperations.getAllUser();
    res.status(200).json({
      status: "sucess",
      msg: "get all users",
      length: users.length,
      data: users
    });
  } catch (err) {
    res.status(400).json(err);
  }
};

const createNewComapny = async (req, res) => {
  try {
    newCompany = await userOperations.createNewUser(req.body);

    res.status(201).json({
      status: "sucess",
      msg: "new user created .... ",
      length: newUser.length,
      data: newUser
    });
  } catch (err) {
    res.status(400).json({ status: "fail", msg: err });
  }
};

module.exports = {
  getAllComapny,
  createNewComapny
};
