import React from "react";

import Modal from "../common/modal-component/Modal";

const ProfileResumeMenu = ({ menu }) => {
  return (
    <div>
      profile Menu
      {menu &&
        menu.map(element => {
          return <Modal key={element} modalName={`Add new ${element}`} />;
        })}
    </div>
  );
};

export default ProfileResumeMenu;
