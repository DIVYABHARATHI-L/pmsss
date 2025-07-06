import React from "react";
import Login from "../Auth/Login";
import SignUp from "../Auth/SignUp";
import "./AuthOverlay.css";

const AuthOverlay = ({ mode, closeOverlay }) => {
  return (
    <div className="auth-overlay">
      <div className="auth-modal">
        <button className="close-button" onClick={closeOverlay}>
          ×
        </button>
        {mode === "login" ? <Login /> : <SignUp />}
      </div>
    </div>
  );
};

export default AuthOverlay;
