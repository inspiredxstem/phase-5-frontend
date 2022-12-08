import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import store from "../store";

export default function Register() {
  const usernameRef = useRef();
  const passwordRef = useRef();

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleRegister = (e) => {
    e.preventDefault();
    // dispatch(
    //   loginUser({
    //     username: usernameRef.current.value,
    //     password: passwordRef.current.value
    //   })
    // );
    if (store.getState().user.loading) {
      navigate("/profileinfo");
    } else {
      console.log("Get help");
    }
  };

  return (
    <>
      <div className="loginForm">
        <h3>Register</h3>
        <form onSubmit={handleRegister}>
          <div className="inputField">
            <input
              type="username"
              ref={usernameRef}
              className="input-login"
              placeholder="Username"
            />
          </div>
          <div className="inputField">
            <input
              type="password"
              ref={passwordRef}
              className="input-login"
              placeholder="Password"
            />
          </div>
          <div className="submitInput">
            <button type="submit">Register</button>
          </div>
        </form>
      </div>
    </>
  );
}
