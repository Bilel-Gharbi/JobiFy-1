import React from "react";
import { withRouter } from "react-router-dom";

const AuthButton = ({ history }) => {
  return (
    <div
      className="kt-header__topbar-item"
      onClick={() => history.push("/auth")}
    >
      <div className="kt-header__topbar-wrapper">
        <span
          className="kt-header__topbar-icon kt-header__topbar-icon--"
          id="kt_quick_panel_toggler_btn"
        >
          <i className="flaticon2-rocket kt-font-warning" />
        </span>
      </div>
    </div>
  );
};

export default withRouter(AuthButton);
