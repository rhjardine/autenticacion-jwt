import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  useEffect(() => {
    actions.private();
  }, [actions.private]);
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container">
        <div className="ml-auto">
          <Link to="/">
            <span className="navbar-brand mb-0 h1">React Boilerplate</span>
          </Link>
          <Link to="/sign-up">
            <button className="btn btn-success me-2">Sign Up</button>
          </Link>
        </div>
        <div className="ml-auto">
          {!localStorage.getItem("jwt-token") ? (
            <Link to="/log-in">
              <button className="btn btn-primary me-2">Log In</button>
            </Link>
          ) : (
            <Link to="/log-in">
              <button
                className="btn btn-danger"
                onClick={(e) => {
                  console.log("prueba de función");
                  localStorage.removeItem("jwt-token");
                  navigate("/log-in");
                }}
              >
                Log out
              </button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};
