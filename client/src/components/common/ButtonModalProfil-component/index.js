import React from "react";

const ButtonModalProfil = ({ icon, onClick }) => {
  return (
    <div className="kt-portlet__head-toolbar" onClick={onClick}>
      <div className="kt-portlet__head-wrapper">
        <button className="btn btn-label-brand btn-sm btn-icon btn-icon-md">
          <i className={icon || "flaticon2-add"} />
        </button>
      </div>
    </div>
  );
};

export default ButtonModalProfil;
