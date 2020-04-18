import React from "react";

const UserProfileDescription = ({ data }) => {
  return (
    <>
      <div className="kt-widget__head">
        <div className="kt-widget__media">
          <img src="assets/media/users/100_13.jpg" alt="image" />
        </div>
        <div className="kt-widget__content">
          <div className="kt-widget__section">
            <a className="kt-widget__username">
              {data.firstName}
              <i className="flaticon2-correct kt-font-success" />
            </a>
            <span className="kt-widget__subtitle">Head of Development </span>
          </div>
          <div className="kt-widget__action">
            <button type="button" className="btn btn-info btn-sm">
              chat
            </button>
            &nbsp;
            <button type="button" className="btn btn-success btn-sm">
              follow
            </button>
          </div>
        </div>
      </div>
      <div className="kt-widget__body">
        <div className="kt-widget__content">
          <div className="kt-widget__info">
            <span className="kt-widget__label">Email:</span>
            <a className="kt-widget__data">matt@fifestudios.com</a>
          </div>
          <div className="kt-widget__info">
            <span className="kt-widget__label">Phone:</span>
            <a className="kt-widget__data">{data.phoneNumber}</a>
          </div>
          <div className="kt-widget__info">
            <span className="kt-widget__label">Location:</span>
            <span className="kt-widget__data">{data.location}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfileDescription;
