import React, { useContext, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const SignUp = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();
  return (
    <div
      style={{ height: "80vh" }}
      className="container flex-column d-flex align-items-center justify-content-center"
    >
      <div className="row">
        <form>
          <input
            type="text"
            name="email"
            className="form-control my-1"
            value={email}
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            name="password"
            className="form-control my-1"
            value={password}
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </form>
      </div>
      <div className="row my-2">
        <button
          type="button"
          className="btn btn-primary"
          onClick={async (e) => {
            const success = await actions.signUp({
              email: email,
              password: password,
            });
            if (success) {
              navigate("/log-in");
              return;
            }
            alert("something happened while creating the user.");
          }}
        >
          {"sign up"}
        </button>
      </div>
    </div>
  );
};
