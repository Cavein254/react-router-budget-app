import React from "react";
import logoMark from "../assets/logomark.svg";

const Nav = ({ userName }) => {
  return (
    <nav>
      <img src={logoMark} alt="logo" height={40} />
      <span>Home Budget</span>
    </nav>
  );
};

export default Nav;
