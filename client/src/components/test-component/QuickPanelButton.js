import React, { Component } from "react";

export default class QuickPanelButton extends Component {
  render() {
    return (
      <div
        className="kt-header__topbar-item"
        data-toggle="kt-tooltip"
        title="Quick panel"
        data-placement="top"
      >
        <div className="kt-header__topbar-wrapper">
          <span
            className="kt-header__topbar-icon kt-header__topbar-icon--success"
            id="kt_quick_panel_toggler_btn"
          >
            <i className="flaticon2-menu-2" />
          </span>
        </div>
      </div>
    );
  }
}
