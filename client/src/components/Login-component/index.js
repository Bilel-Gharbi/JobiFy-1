import React from "react";
import { useForm } from "react-hook-form";

const Login = (props) => {
  const { handleSubmit, register, errors } = useForm();
  const onSubmit = (data) => {
    //dispatch login action
    props.login({ ...data });
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
          </div>
          <p> {errors.email && errors.email.message} </p>
        </div>
        <div className="input-group row" style={{ padding: "10px" }}>
          <label className="col-3 col-form-label">Password</label>
          <div className="col-9">
            <input
              name="password"
              className="form-control"
              type="password"
              ref={register({ required: "password is required" })}
            />
          </div>
          <p>{errors.password && errors.password.message}</p>
        </div>
        <div className="row kt-login__extra" style={{ padding: "10px" }}>
          <div className="col kt-align-right">
            <a className="kt-login__link">Forget Password ?</a>
          </div>
        </div>
        {props.err.id === "login" && props.err.message ? (
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
            Login
          </button>
        </div>
      </form>
    </>
  );
};

export default Login;
