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

const createUserInfo = async (req, res) => {
  const authId = req.params.authId;

  try {
    userInfo = await userOperations.createUserInfo(authId, req.body);
    res.status(201).json({
      status: "sucess",
      msg: "init user info with authId .... ",
      data: userInfo
    });
  } catch (err) {
    res.status(400).json(err);
  }
};

module.exports = {
  getAllUser,
  createNewUser,
  createUserInfo
};
