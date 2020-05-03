import React, { useState } from "react";

import { useForm } from "react-hook-form";
import Select from "react-select";

const Signup = (props) => {
  const { handleSubmit, register, errors, watch, setError } = useForm();
  //Select option
  const options = [
    { value: "USER", label: "candidate" },
    { value: "COMPANY", label: "company" },
  ];

  const [selectValue, setSelectValue] = useState({ selectedOption: [] });

  const handleSelectChange = (selectedOption) => {
    if (!selectedOption) setError("type");
    setSelectValue({ selectedOption });
  };

  const onSubmit = (data) => {
    if (!data.type) return setError("type");
    props.signup({ ...data });
  };

  return (
    <>
      <form className="kt-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="input-group row" style={{ padding: "10px" }}>
          <label className="col-3 col-form-label">Email</label>
          <div className="col-9">
            <input
              name="email"
              className="form-control"
              type="text"
              ref={register({
                required: "address mail is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: "invalid email address",
                },
              })}
            />
            <p> {errors.email && errors.email.message} </p>
          </div>
        </div>
        <div className="input-group row" style={{ padding: "10px" }}>
          <label className="col-3 col-form-label">Password</label>
          <div className="col-9">
            <input
              name="password"
              className="form-control"
              type="password"
              ref={register({ required: "Password is required" })}
            />
            <p>{errors.password && errors.password.message}</p>
          </div>
        </div>
        <div className="input-group row" style={{ padding: "10px" }}>
          <label className="col-3 col-form-label">Confirm Password</label>
          <div className="col-9">
            <input
              name="confirmPassword"
              className="form-control"
              type="password"
              ref={register({
                required: "password is required",
                validate: (value) =>
                  value === watch("password") || "The passwords do not match",
              })}
            />
            <p>{errors.confirmPassword && errors.confirmPassword.message}</p>
          </div>
        </div>

        <div className="input-group row" style={{ padding: "10px" }}>
          <label className="col-3 col-form-label">Are you ? </label>
          <div className="col-9">
            <Select
              name="type"
              placeholder="Choose account type "
              value={selectValue.value}
              options={options}
              onChange={handleSelectChange}
              ref={() => {
                register({
                  name: "type",
                  value: selectValue.selectedOption.value,
                  required: true,
                  validate: (value) => {
                    return value ? value.length > 0 : !!value;
                  },
                });
              }}
            />

            <p>{errors.type && "Please select account type"}</p>
          </div>
        </div>
        {props.err.id === "signup" && props.err.message ? (
          <div className="alert alert-outline-warning fade show">
            <div className="alert-icon">
              <i className="flaticon-warning" />
            </div>
            <div className="alert-text">{props.err.message}</div>
          </div>
        ) : null}

        <div
          className="kt-login__actions"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <button
            className="btn btn-brand btn-elevate kt-login__btn-primary"
            type="submit"
          >
            Sign In
          </button>
        </div>
      </form>
    </>
  );
};

export default Signup;
