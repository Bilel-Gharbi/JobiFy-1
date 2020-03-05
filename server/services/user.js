//import User model from models/index.js file
const { User } = require("../models");

// User service file includes functon thant interact with directly with the database
// After create a service export using the es6 synt

const createUser = async data => {
  const { id, firstName, lastName } = data;
  try {
    await User.sync({ force: false });
    return User.create({
      id,
      firstName,
      lastName
    });
  } catch (err) {
    console.log("UserService/createUser Error ", err);
  }
};

const getAllUser = async () => {
  try {
    let result = await User.findAll();
    return result;
  } catch (err) {
    console.log("UserService/getAllUser Error ", err);
  }
};

const generateFakeUsers = async fakeData => {
  try {
    await User.sync({ force: true });
    return User.bulkCreate(fakeData);
  } catch (err) {
    console.log("UserService/generateDammyUser data Error ", err);
  }
};

module.exports = {
  createUser,
  getAllUser,
  generateFakeUsers
};
