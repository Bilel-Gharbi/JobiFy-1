import React from "react";

import Modal from "../common/modal-component/Modal";

const ProfileResumeMenu = ({ menu }) => {
  return (
    <div>
      profile Menu
      {menu &&
        menu.map(element => {
          return (
            <Modal
              key={element}
              modalName={`Add new ${element}`}
              body={<div>hello</div>}
            />
          );
        })}
    </div>
  );
};

export default ProfileResumeMenu;
