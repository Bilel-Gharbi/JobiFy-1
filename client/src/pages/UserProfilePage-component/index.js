import React from "react";

import ProfileRightDetails from "./ProfileRightDetails";
import ProfileLeftMenu from "./ProfileLeftMenu";

const UserProfilePage = () => {
  return (
    <div className="kt-grid kt-grid--desktop kt-grid--ver kt-grid--ver-desktop kt-app">
      <ProfileLeftMenu />
      <ProfileRightDetails />
    </div>
  );
};

export default UserProfilePage;
