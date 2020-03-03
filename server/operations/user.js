/* 
    User operation contain all the operation from client side 
 */

const { userService } = require("../services");

const createNewUser = async data => {
  const { name, surName } = data;

  try {
    result = await userService.createUser(name, surName);
    return result;
  } catch (err) {
    console.log("createNewUser operation error ", err);
  }
};

const getAllUser = async () => {
  try {
    result = await userService.getAllUser();
    return result;
  } catch (err) {
    console.log("getAllUser operation error ", err);
  }
};
module.exports = {
  createNewUser,
  getAllUser
};
