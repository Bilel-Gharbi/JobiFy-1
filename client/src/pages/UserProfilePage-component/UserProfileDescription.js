import React from "react";

const UserProfileDescription = ({ data, email, resume }) => {
  const { experiences } = resume;
  let position = experiences[0].position;
  return (
    <>
      <div className="kt-widget__head">
        <div className="kt-widget__media">
          <img src={data.photo} alt="image" />
        </div>
        <div className="kt-widget__content">
          <div className="kt-widget__section">
            <a className="kt-widget__username">
              {data.firstName}
              <i className="flaticon2-correct kt-font-success" />
            </a>
            <span className="kt-widget__subtitle">{position} </span>
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
            <a className="kt-widget__data">{email}</a>
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
