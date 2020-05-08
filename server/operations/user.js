/* 
    User operation contain all the operation from client side 
 */

const { userServices } = require("../services");
//cloudinary to store photo and generate cloud link
const cloudinary = require("cloudinary").v2;

const createNewUser = async (data) => {
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

const createUserInfo = async (authId, data) => {
  try {
    result = await userServices.createUserInfo(authId, data);
    return result;
  } catch (err) {
    console.log("createUserInfo operation error ", err);
  }
};

const updateUserInfo = async (authId, data, filePath) => {
  try {
    if (filePath) {
      const photoCloudURL = await cloudinary.uploader.upload(filePath);
      data.photo = photoCloudURL.url;
    }
    result = await userServices.createUserInfo(authId, data);

    return result;
  } catch (err) {
    console.log("createNewUser operation error ", err);
  }
};

const activateUserProfile = async (id) => {
  try {
    result = await userServices.activateUserProfile(id);
    return result;
  } catch (err) {
    console.log("activateUserProfile / User operation error ", err);
  }
};

module.exports = {
  createNewUser,
  getAllUser,
  createUserInfo,
  activateUserProfile,
  updateUserInfo,
};
