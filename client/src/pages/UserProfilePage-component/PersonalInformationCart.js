import React, { useState } from "react";
import { connect } from "react-redux";
import { updateUserInfo } from "../../actions/user";
import { useForm } from "react-hook-form";

import FormChangePwd from "../../components/FormChangePwd";

const PersonalInformationCart = ({ data, updateUserInfo, email }) => {
  const { handleSubmit, register, errors } = useForm();

  const [bgPhoto, setBgPhoto] = useState(data.photo);
  const [formDisplay, setFormDisplay] = useState(1);

  const handlePhotoChange = () => {
    let photo = document.getElementsByName("userPhoto")[0].files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setBgPhoto(reader.result);
    };
    if (photo) {
      reader.readAsDataURL(photo);
      setBgPhoto(reader.result);
    }
  };

  const onSubmit = (data) => {
    const { firstName, lastName, phoneNumber, location, userPhoto } = data;
    const formData = new FormData();

    formData.append("userPhoto", userPhoto[0]);
    formData.append("firstName", firstName);
    formData.append("lastName", lastName);
    formData.append("phoneNumber", phoneNumber);
    formData.append("location", location);

    updateUserInfo(formData);
  };
  return (
    <>
      <div
        style={{ display: "flex", margin: "10px", justifyContent: "flex-end" }}
      >
        {formDisplay === 1 ? (
          <a
            href="#"
            className="kt-login__account-link"
            onClick={() => setFormDisplay(2)}
          >
            <b>Change password</b>
          </a>
        ) : (
          <a
            href="#"
            className="kt-login__account-link"
            onClick={() => setFormDisplay(1)}
          >
            <b>Update Account Info</b>
          </a>
        )}
        &nbsp;&nbsp;
      </div>
      {formDisplay === 1 ? (
        <div style={{ width: "80%", margin: "auto" }}>
          <form
            className="kt-form kt-form--label-right"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="kt-portlet__body">
              <div className="kt-section kt-section--first">
                <div className="kt-section__body">
                  <div className="form-group row">
                    <label className="col-xl-3 col-lg-3 col-form-label">
                      {/* removed label */}
                    </label>
                    <div className="col-lg-9 col-xl-6">
                      <div
                        className="kt-avatar kt-avatar--outline"
                        id="kt_user_avatar"
                      >
                        <div
                          className="kt-avatar__holder"
                          style={{
                            backgroundImage: `url(${bgPhoto || null})`,
                            //backgroundImage: 'url("assets/media/users/100_13.jpg")',
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
                            name="userPhoto"
                            accept=".png, .jpg, .jpeg"
                            onChange={handlePhotoChange}
                            ref={register()}
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
                        name="firstName"
                        type="text"
                        defaultValue={data.firstName}
                        ref={register({
                          required: "please fill your first name",
                        })}
                      />
                      {errors.firstName && errors.firstName.message}
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-xl-3 col-lg-3 col-form-label">
                      Last Name
                    </label>
                    <div className="col-lg-9 col-xl-6">
                      <input
                        className="form-control"
                        name="lastName"
                        type="text"
                        defaultValue={data.lastName}
                        ref={register({
                          required: "please fill your last name",
                        })}
                      />
                      {errors.lastName && errors.lastName.message}
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-xl-3 col-lg-3 col-form-label">
                      Location
                    </label>
                    <div className="col-lg-9 col-xl-6">
                      <input
                        className="form-control"
                        name="location"
                        type="text"
                        defaultValue={data.location}
                        ref={register({
                          required: "please fill your location",
                        })}
                      />
                      {errors.location && errors.location.message}
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
                          name="phoneNumber"
                          className="form-control"
                          placeholder="Phone"
                          defaultValue={data.phoneNumber}
                          ref={register({
                            required: "please fill your phone number",
                          })}
                        />
                      </div>
                      {errors.phoneNumber && errors.phoneNumber.message}
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
        </div>
      ) : (
        <div style={{ width: "80%", margin: "auto" }}>
          <FormChangePwd email={email} />
        </div>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    email: state.auth.email,
  };
};

export default connect(mapStateToProps, { updateUserInfo })(
  PersonalInformationCart
);
