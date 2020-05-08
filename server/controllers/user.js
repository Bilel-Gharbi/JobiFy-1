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
      data: users,
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
      data: newUser,
    });
  } catch (err) {
    res.status(400).json({ status: "fail", msg: err });
  }
};

const createUserInfo = async (req, res) => {
  try {
    userInfo = await userOperations.createUserInfo(req.params.authId, req.body);
    res.status(201).json({
      status: "sucess",
      msg: `init user info with authId .... ${req.params.authId}`,
      data: userInfo,
    });
  } catch (err) {
    res.status(400).json(err);
  }
};

const updateUserInfo = async (req, res) => {
  try {
    const { authId } = req.params;
    let filePath;
    req.file ? (filePath = req.file.path) : null;

    userInfo = await userOperations.updateUserInfo(authId, req.body, filePath);
    res.status(201).json({
      status: "sucess",
      msg: `update user info with authId .... ${authId}`,
      data: userInfo,
    });
  } catch (err) {
    res.status(400).json(err);
  }
};

const activateUserProfile = async (req, res) => {
  try {
    let result = userOperations.activateUserProfile(req.query.id);
    res.status(201).json({
      status: "sucess",
      msg: `User Profile with id ${req.query.id} activated`,
      result,
    });
  } catch (err) {
    res.status(401).json({ status: "fail", err: err.message });
  }
};

module.exports = {
  getAllUser,
  createNewUser,
  createUserInfo,
  activateUserProfile,
  updateUserInfo,
};
