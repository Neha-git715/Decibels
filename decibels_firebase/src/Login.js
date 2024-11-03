import React from "react";
import "./Login.css";
import { accessUrl } from "./spotify";
import logo from "./logo.svg";

function Login() {
  return (
    <div className="login">
      <img
        src={logo}
        alt=""
      />
      <a href={accessUrl}>LOGIN TO DECIBELS</a>
    </div>
  );
}

export default Login;
