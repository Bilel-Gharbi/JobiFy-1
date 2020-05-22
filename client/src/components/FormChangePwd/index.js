import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { changePassword } from "../../actions/auth";

import { useForm } from "react-hook-form";
import Button from "../common/Button-component/Button";

const FormChangePwd = ({ email, changePassword, error }) => {
  const [submited, setSubmited] = useState(false);
  const { register, handleSubmit, errors, watch } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    setSubmited(true);
    changePassword(data);
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="kt-portlet__body">
          <div className="kt-section kt-section--first">
            <div className="kt-section__body">
              <div className="form-group row">
                <label className="col-xl-3 col-lg-3 col-form-label">
                  Email
                </label>
                <div className="col-lg-9 col-xl-6">
                  <input
                    className="form-control"
                    name="email"
                    type="email"
                    placeholder="email"
                    ref={register({
                      validate: (value) => value === email || "incorrect email",
                    })}
                  />
                  {errors.email && errors.email.message}
                </div>
              </div>
              <div className="form-group row">
                <label className="col-xl-3 col-lg-3 col-form-label">
                  Password
                </label>
                <div className="col-lg-9 col-xl-6">
                  <input
                    className="form-control"
                    name="pwd"
                    type="password"
                    placeholder="Old password"
                    ref={register({
                      required: "enter you password",
                    })}
                  />
                  {errors.pwd && errors.pwd.message}
                </div>
              </div>
              <div className="form-group row">
                <label className="col-xl-3 col-lg-3 col-form-label">
                  New password
                </label>
                <div className="col-lg-9 col-xl-6">
                  <input
                    className="form-control"
                    name="newPwd"
                    type="password"
                    placeholder="new password"
                    ref={register({
                      required: "enter new password",
                    })}
                  />
                  {errors.newPwd && errors.newPwd.message}
                </div>
              </div>
              <div className="form-group row">
                <label className="col-xl-3 col-lg-3 col-form-label">
                  Confirm new password
                </label>
                <div className="col-lg-9 col-xl-6">
                  <input
                    className="form-control"
                    name="confirmNewPwd"
                    type="password"
                    placeholder="confirm your new password"
                    ref={register({
                      required: "enter new password",
                      validate: (value) =>
                        value === watch("newPwd") || "password doesn't match",
                    })}
                  />
                  {errors.confirmNewPwd && errors.confirmNewPwd.message}
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Button className="btn btn-outline-brand btn-square" type="submit">
              Update password
            </Button>
          </div>
        </div>
      </form>
      {submited && !error.message ? (
        <div
          className="alert alert-outline-primary fade show"
          style={{ margin: 20 }}
        >
          <div className="alert-icon">
            <i className="flaticon-warning" />
          </div>
          <div className="alert-text" style={{ textAlign: "center" }}>
            Password updated
          </div>
        </div>
      ) : null}

      {error.message ? (
        <div
          className="alert alert-outline-danger fade show"
          style={{ margin: 20 }}
        >
          <div className="alert-icon">
            <i className="flaticon-warning" />
          </div>
          <div className="alert-text" style={{ textAlign: "center" }}>
            {error.message}
          </div>
        </div>
      ) : null}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    error: state.error,
  };
};

export default connect(mapStateToProps, { changePassword })(FormChangePwd);
