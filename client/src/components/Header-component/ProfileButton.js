import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ProfileButton = (props) => {
  const [display, setDisplay] = useState("none");
  const [name, setName] = useState();

  useEffect(() => {
    const name =
      (userProfile.user && userProfile.user.firstName) ||
      (companyProfile.company && companyProfile.company.companyName);
    setName(name);
  }, [props.userProfile.user, props.companyProfile.company]);

  const toggelMenuProfile = (e) => {
    e.preventDefault();
    display === "none" ? setDisplay("") : setDisplay("none");
  };
  const renderMenuList = () => {
    const { userType, logout, userProfile, companyProfile } = props;

    let profilePhoto =
      (userProfile.user && userProfile.user.photo) ||
      (companyProfile.company && companyProfile.company.logo);

    return (
      <div style={{ display: display, position: "relative" }}>
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
            <div className="kt-user-card__name">{name}</div>
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
                onClick={() => logout() && setDisplay("none")}
              >
                Sign Out
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  };
  const { userProfile, companyProfile } = props;
  let profilePhoto =
    (userProfile.user && userProfile.user.photo) ||
    (companyProfile.company && companyProfile.company.logo);
  return (
    <div className="kt-header__topbar-item kt-header__topbar-item--user show">
      <div
        className="kt-header__topbar-wrapper"
        onClick={toggelMenuProfile}
        data-offset="10px,0px"
      >
        <img className="kt-hidden-" alt="Pic" src={profilePhoto} />
      </div>

      {renderMenuList()}
    </div>
  );
};

export default ProfileButton;
