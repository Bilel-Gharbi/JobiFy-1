import React, { Component } from "react";

export default class UserButton extends Component {
  state = {
    display: "none",
  };

  toggelMenuProfile = (e) => {
    e.preventDefault();
    this.state.display === "none"
      ? this.setState({ display: "" })
      : this.setState({ display: "none" });
  };

  renderMenuList = () => {
    return (
      <div style={{ display: this.state.display }}>
        <div
          className="dropdown-menu dropdown-menu-fit dropdown-menu-right dropdown-menu-anim dropdown-menu-xl show"
          style={{
            position: "absolute",
            transform: "translate3d(706px, 70px, 0px)",
            top: "0px",
            left: "0px",
            willChange: "transform",
          }}
        >
          {/*begin: Head */}
          <div className="kt-user-card kt-user-card--skin-light kt-notification-item-padding-x">
            <div className="kt-user-card__avatar">
              <img
                className="kt-hidden-"
                alt="Pic"
                src="assets/media/users/300_25.jpg"
              />

              {/*use below badge element instead the user avatar to display username's first letter(remove kt-hidden class to display it) */}
              <span className="kt-badge kt-badge--username kt-badge--unified-success kt-badge--lg kt-badge--rounded kt-badge--bold kt-hidden">
                S
              </span>
            </div>
            <div className="kt-user-card__name">Sean Stone</div>
            <div className="kt-user-card__badge">
              <span className="btn btn-label-primary btn-sm btn-bold btn-font-md">
                23 messages
              </span>
            </div>
          </div>
          {/*end: Head */}
          {/*begin: Navigation */}
          <div className="kt-notification">
            <a
              href="custom/apps/user/profile-1/personal-information.html"
              className="kt-notification__item"
            >
              <div className="kt-notification__item-icon">
                <i className="flaticon2-calendar-3 kt-font-success" />
              </div>
              <div className="kt-notification__item-details">
                <div className="kt-notification__item-title kt-font-bold">
                  My Profile
                </div>
                <div className="kt-notification__item-time">
                  Account settings and more
                </div>
              </div>
            </a>
            <a
              href="custom/apps/user/profile-3.html"
              className="kt-notification__item"
            >
              <div className="kt-notification__item-icon">
                <i className="flaticon2-mail kt-font-warning" />
              </div>
              <div className="kt-notification__item-details">
                <div className="kt-notification__item-title kt-font-bold">
                  My Messages
                </div>
                <div className="kt-notification__item-time">
                  Inbox and tasks
                </div>
              </div>
            </a>
            <a
              href="custom/apps/user/profile-2.html"
              className="kt-notification__item"
            >
              <div className="kt-notification__item-icon">
                <i className="flaticon2-rocket-1 kt-font-danger" />
              </div>
              <div className="kt-notification__item-details">
                <div className="kt-notification__item-title kt-font-bold">
                  Applied Jobs
                </div>
                <div className="kt-notification__item-time">
                  applyed jobs and status
                </div>
              </div>
            </a>

            <div
              className="kt-notification__custom kt-space-between"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <a
                href="custom/user/login-v2.html"
                target="_blank"
                className="btn btn-label btn-label-brand btn-sm btn-bold"
              >
                Sign Out
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  };
  render() {
    return (
      <div className="kt-header__topbar-item kt-header__topbar-item--user show">
        <div
          className="kt-header__topbar-wrapper"
          onClick={this.toggelMenuProfile}
          data-offset="10px,0px"
        >
          <img
            className="kt-hidden-"
            alt="Pic"
            src="assets/media/users/300_21.jpg"
          />
        </div>

        {this.renderMenuList()}
      </div>
    );
  }
}
