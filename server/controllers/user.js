/* User controllers */

const { userOperations } = require("../operations");
const data = require("../fakeUserData");

const getAllUser = async (req, res) => {
  try {
    users = await userOperations.getAllUser();
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

const createNewUser = async (req, res) => {
  try {
    newUser = await userOperations.createNewUser(req.body);
    //console.log(newUser);
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
const generateFakeUsers = async (req, res) => {
  try {
    fakeUsers = await userOperations.generateFakeUsers(data);
    res.status(201).json({
      status: "sucess",
      msg: "generating random fake user data .... ",
      length: fakeUsers.length,
      data: fakeUsers
    });
  } catch (err) {
    res.status(400).json(err);
  }
};

module.exports = {
  getAllUser,
  createNewUser,
  generateFakeUsers
};
