//import User model from models/index.js file
const { User } = require("../models");

// User service file includes functon thant interact with directly with the database
// After create a service export using the es6 synt

const createUser = async (name, surname) => {
  // force: true will drop the table if it already exists
  /*   TODO: function that check if the table created or not */
  try {
    await User.sync({ force: false });
    // Table created
    return User.create({
      firstName: name,
      lastName: surname
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

module.exports = {
  createUser,
  getAllUser
};
