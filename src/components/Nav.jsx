import React from "react";
import logoMark from "../assets/logomark.svg";
import { Form, NavLink } from "react-router-dom";
import { TrashIcon } from "@heroicons/react/24/solid";

const Nav = ({ userName }) => {
  return (
    <nav>
      <NavLink to="/" aria-label="Go to Home">
        <img src={logoMark} alt="logo" height={40} />
        <span>HomeBudget</span>
      </NavLink>
      {userName && (
        <Form
          method="POST"
          action="/logout"
          onSubmit={(event) => {
            if (!confirm("Delete  user and all their data")) {
              event.preventDefault();
            }
          }}
        >
          <button className="btn btn--warning" type="submit">
            <span> Delete User</span>
            <TrashIcon width={20} />
          </button>
        </Form>
      )}
    </nav>
  );
};

export default Nav;
