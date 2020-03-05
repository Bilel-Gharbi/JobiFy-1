/* 
    User operation contain all the operation from client side 
 */

const { userServices } = require("../services");

const createNewUser = async data => {
  try {
    result = await userServices.createUser(data);
    return result;
  } catch (err) {
    console.log("createNewUser operation error ", err);
  }
};

const getAllUser = async () => {
  try {
    result = await userServices.getAllUser();
    return result;
  } catch (err) {
    console.log("getAllUser operation error ", err);
  }
};

const generateFakeUsers = async data => {
  try {
    result = await userServices.generateFakeUsers(data);
    return result;
  } catch (err) {
    console.log("getAllUser operation error ", err);
  }
};
module.exports = {
  createNewUser,
  getAllUser,
  generateFakeUsers
};
