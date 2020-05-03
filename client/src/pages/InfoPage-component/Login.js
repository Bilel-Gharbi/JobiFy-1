import React from "react";
import { useForm } from "react-hook-form";

const Login = (props) => {
  const { handleSubmit, register, errors } = useForm();
  const onSubmit = (data, e) => {
    e.preventDefault();
    console.log(data);
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

/* import React, { Component } from "react";
import "./login.css";

class Login extends Component {
  state = {
    email: "",
    password: "",
  };
  handelSubmit = (e) => {
    e.preventDefault();
    this.props.login({ ...this.state }, () => {
      this.props.history.push("/profile");
    });
  };
  handelChange = (e) => {
    const name = e.target.name;
    this.setState({ [name]: e.target.value });
  };
  render() {
    const { email, password } = this.state;
    return (
      <>
        <div className="login">
          <form onSubmit={this.handelSubmit}>
            <h3>Login </h3>
            {this.props.err.id === "login" && this.props.err.message ? (
              <div className="alert alert-danger" role="alert">
                {this.props.err.message}
              </div>
            ) : null}

            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                name="email"
                id="eamil"
                className="form-control"
                value={email}
                placeholder="email"
                onChange={this.handelChange}
              />
              <small id="emailHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                value={password}
                className="form-control"
                placeholder="Password"
                onChange={this.handelChange}
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </>
    );
  }
}

export default Login;
 */
