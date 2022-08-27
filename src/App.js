import React, { Component } from "react";
import "./App.css";
// import '../node_modules'
import NavBar from "./NavBar";
import Login from "./Login";

export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Login />
      </div>
    );
  }
}
