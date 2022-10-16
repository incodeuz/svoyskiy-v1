import React from "react";
import "../../App.css";
import "./style.css";
import { Outlet, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="btnCon navbar">
        <Link className="link" to="/">
          <button className="button">Home</button>
        </Link>
        <div className="btnCon">
          <Link className="link" to="counter">
            <button className="button">Counter</button>
          </Link>
          <Link className="link" to="todo">
            <button
              style={{
                marginLeft: "10px ",
              }}
              className="button"
            >
              Todo App
            </button>
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
