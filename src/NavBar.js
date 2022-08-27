import React, { Component } from "react";

export default class NavBar extends Component {
  render() {
    return (
      <>
        <nav class="navbar justify-content-end">
          <a class="navbar-brand link-primary" href="#">
            Home
          </a>
          <a class="navbar-brand link-primary" href="#">
            Student Portal
          </a>
          <a class="navbar-brand link-primary" href="#">
            Login
          </a>
        </nav>
      </>
    );
  }
}
