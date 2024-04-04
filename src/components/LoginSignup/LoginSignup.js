import React from "react";
import "./LoginSignup.css";
import logo from "../Assets/logoN.png";
import user_icon from "../Assets/person.png";
import email_icon from "../Assets/email.png";
import password_icon from "../Assets/password.png";
import { useState } from "react";
//import { useState } from ".pnpm/@types+react@16.14.59/node_modules/@types/react";

const LoginSignup = () => {
  const [action, setAction] = useState("Sign Up");

  return (
    <div className="container">
      <div className="logo">
        <img src={logo} alt="Logo" style={{ width: "50px", height: "50px" }} />
      </div>
      <div className="blur-background"></div>
      <div className="header">
        <div className="text">{action}</div>
        <div className="welcome-msg">Welcome To Our Website!</div>
        <div className="uderline"></div>
      </div>
      <div className="inputs">
        {action === "Login" ? (
          <div></div>
        ) : (
          <div className="input">
            <img src={user_icon} alt="" />
            <input type="text" placeholder="Name" />
          </div>
        )}

        <div className="input">
          <img src={email_icon} alt="" />
          <input type="email" placeholder="Email Id" />
        </div>
        <div className="input">
          <img src={password_icon} alt="" />
          <input type="password" placeholder="Password" />
        </div>
      </div>
      {action === "Sign Up" ? (
        <div className="already-signedup">
          Already Have An Account? <span>Login</span>
        </div>
      ) : (
        <div className="forgot-password">
          Don't Have An Account? <span>Sign Up</span>
        </div>
      )}

      <div className="submit-container">
        <div
          className={action === "Login" ? "submit gray" : "submit"}
          onClick={() => {
            setAction("Sign Up");
          }}
        >
          Sign Up
        </div>
        <div
          className={action === "Sign Up" ? "submit gray" : "submit"}
          onClick={() => {
            setAction("Login");
          }}
        >
          Login
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
