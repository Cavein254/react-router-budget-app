import React from "react";
import logoMark from "../assets/logomark.svg";
import { Form, NavLink } from "react-router-dom";

const Nav = ({ userName }) => {
  return (
    <nav>
      <NavLink to="/" aria-label="Go to Home">
        <img src={logoMark} alt="logo" height={40} />
        <span>HomeBudget</span>
      </NavLink>
      {userName && (
        <Form method="POST" action="/logout">
          <button className="btn btn--warning" type="submit">
            Delete User
          </button>
        </Form>
      )}
    </nav>
  );
};

export default Nav;
