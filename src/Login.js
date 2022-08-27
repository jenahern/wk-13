import React, { Component } from "react";

export default class Login extends Component {
  render() {
    return (
      <div className="container">
        <form className="login-form">
          <div className="form-content">
            <h3 className="form-title">Welcome!</h3>
            <p className="form-desc">
              Please login to access the Student Portal
            </p>
          </div>
          <div className="row mb-3">
            <label for="inputUsername" class="form-label">
              User Name
              <input type="text" className="form-control"></input>
            </label>
          </div>

          <div className="row mb-3">
            <label for="inputPassword" class="form-label">
              Password
              <input type="text" className="form-control"></input>
            </label>
          </div>
          <div className="row mb-3 text-end">
            <div className="col text-end">
              <button type="input" className="btn btn-primary btn-lg">
                Login
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
