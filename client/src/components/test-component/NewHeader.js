import React, { Component } from "react";
import { Link } from "react-router-dom";
import QuickPanelButton from "./QuickPanelButton";
import NotificationButton from "./NotificationButton";
import UserButton from "./UserButton";

export default class NewHeader extends Component {
  render() {
    return (
      <div
        id="kt_header"
        className="kt-header kt-grid__item  kt-header--fixed "
        data-ktheader-minimize="on"
      >
        <div className="kt-header__top">
          <div className="kt-container ">
            {/* band photo */}
            <div className="kt-header__brand kt-grid__item">
              <div className="kt-header__brand-logo">
                <Link to="jobs">
                  <img
                    alt="Logo"
                    src="logo.png"
                    className="kt-header__brand-logo-default"
                    style={{ height: "100px" }}
                  />
                </Link>
              </div>
            </div>
            <div className="kt-header__topbar kt-grid__item kt-grid__item--fluid">
              <NotificationButton />
              <QuickPanelButton />
              <UserButton />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
