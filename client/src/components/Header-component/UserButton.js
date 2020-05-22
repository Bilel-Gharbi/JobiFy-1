import React, { Component } from "react";
import { Link } from "react-router-dom";

class UserButton extends Component {
  state = {
    display: "none",
    name: "",
  };

  componentDidMount() {
    const { userProfile, companyProfile } = this.props;

    const name =
      (userProfile.user && userProfile.user.firstName) ||
      (companyProfile.company && companyProfile.company.companyName);
    this.setState({ name: name });
  }

  toggelMenuProfile = (e) => {
    e.preventDefault();
    this.state.display === "none"
      ? this.setState({ display: "" })
      : this.setState({ display: "none" });
  };

  renderMenuList = () => {
    const { userType, logout, userProfile, companyProfile } = this.props;

    let profilePhoto =
      (userProfile.user && userProfile.user.photo) ||
      (companyProfile.company && companyProfile.company.logo);

    return (
      <div style={{ display: this.state.display, position: "relative" }}>
        <div
          className="dropdown-menu dropdown-menu-fit dropdown-menu-right dropdown-menu-anim dropdown-menu-xl show"
          style={{
            position: "absolute",
            top: "110%",
            left: "-373px",
          }}
        >
          {/*begin: Head */}
          <div className="kt-user-card kt-user-card--skin-light kt-notification-item-padding-x">
            <div className="kt-user-card__avatar">
              <img className="kt-hidden-" alt="Pic" src={profilePhoto} />
            </div>
            <div className="kt-user-card__name">{this.state.name}</div>
            <div className="kt-user-card__badge">
              <span className="btn btn-label-primary btn-sm btn-bold btn-font-md">
                23 messages
              </span>
            </div>
          </div>
          {/*end: Head */}

          {/*begin: Navigation */}
          <div className="kt-notification">
            <Link
              to={userType === "USER" ? "/profile" : "/dashboard"}
              className="kt-notification__item"
            >
              <div className="kt-notification__item-icon">
                <i className="flaticon2-calendar-3 kt-font-success" />
              </div>
              <div className="kt-notification__item-details">
                <div className="kt-notification__item-title kt-font-bold">
                  {userType === "USER" ? "My Profile" : "My Dashboard"}
                </div>
                <div className="kt-notification__item-time">
                  {userType === "USER"
                    ? "Account settings and more"
                    : "Dashbord settings and more"}
                </div>
              </div>
            </Link>
            <a href="#" className="kt-notification__item">
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
            <a href="#" className="kt-notification__item">
              <div className="kt-notification__item-icon">
                <i className="flaticon2-rocket-1 kt-font-danger" />
              </div>
              <div className="kt-notification__item-details">
                <div className="kt-notification__item-title kt-font-bold">
                  {userType === "USER" ? "Applied Jobs" : "My Job Offers"}
                </div>
                <div className="kt-notification__item-time">
                  {userType === "USER"
                    ? "applyed jobs and status"
                    : "job Offers  and status"}
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
                className="btn btn-label btn-label-brand btn-sm btn-bold"
                onClick={() => this.setState({ display: "none" }) && logout()}
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
    console.log(this.props);
    const { userProfile, companyProfile } = this.props;
    let profilePhoto =
      (userProfile.user && userProfile.user.photo) ||
      (companyProfile.company && companyProfile.company.logo);
    return (
      <div className="kt-header__topbar-item kt-header__topbar-item--user show">
        <div
          className="kt-header__topbar-wrapper"
          onClick={this.toggelMenuProfile}
          //onMouseEnter={this.toggelMenuProfile}
          data-offset="10px,0px"
        >
          <img className="kt-hidden-" alt="Pic" src={profilePhoto} />
        </div>

        {this.renderMenuList()}
      </div>
    );
  }
}

export default UserButton;
