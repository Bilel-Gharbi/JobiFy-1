import React from "react";

const PersonalInformationCart = ({ data }) => {
  return (
    <form className="kt-form kt-form--label-right">
      <div className="kt-portlet__body">
        <div className="kt-section kt-section--first">
          <div className="kt-section__body">
            <div className="form-group row">
              <label className="col-xl-3 col-lg-3 col-form-label">Avatar</label>
              <div className="col-lg-9 col-xl-6">
                <div
                  className="kt-avatar kt-avatar--outline"
                  id="kt_user_avatar"
                >
                  <div
                    className="kt-avatar__holder"
                    style={{
                      backgroundImage: 'url("assets/media/users/100_13.jpg")',
                    }}
                  />
                  <label
                    className="kt-avatar__upload"
                    data-toggle="kt-tooltip"
                    data-original-title="Change avatar"
                  >
                    <i className="fa fa-pen" />
                    <input
                      type="file"
                      name="profile_avatar"
                      accept=".png, .jpg, .jpeg"
                    />
                  </label>
                  <span
                    className="kt-avatar__cancel"
                    data-toggle="kt-tooltip"
                    data-original-title="Cancel avatar"
                  >
                    <i className="fa fa-times" />
                  </span>
                </div>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-xl-3 col-lg-3 col-form-label">
                First Name
              </label>
              <div className="col-lg-9 col-xl-6">
                <input
                  className="form-control"
                  type="text"
                  defaultValue={data.firstName}
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-xl-3 col-lg-3 col-form-label">
                Last Name
              </label>
              <div className="col-lg-9 col-xl-6">
                <input
                  className="form-control"
                  type="text"
                  defaultValue={data.lastName}
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-xl-3 col-lg-3 col-form-label">
                Location
              </label>
              <div className="col-lg-9 col-xl-6">
                <input
                  className="form-control"
                  type="text"
                  defaultValue={data.location}
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-xl-3 col-lg-3 col-form-label">
                Contact Phone
              </label>
              <div className="col-lg-9 col-xl-6">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="la la-phone" />
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Phone"
                    defaultValue={data.phoneNumber}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="form-group row"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <button type="submit" className="btn btn-success">
            Update
          </button>
          &nbsp;
          <button type="reset" className="btn btn-secondary">
            Cancel
          </button>
        </div>
      </div>
    </form>
  );
};

export default PersonalInformationCart;
