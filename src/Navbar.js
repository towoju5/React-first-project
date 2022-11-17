import React from "react";
import logo from "./logo.svg";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="nav d-flex justify-content-between">
      <Link to="/">
        <img src={logo} className='logo' alt="Logo"/>
        <span className="logo-text">ZeenahPay</span>
      </Link>
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="contact">
          <li>Contact us</li>
        </Link>
        <Link to="services">
          <li>Service page</li>
        </Link>
        <Link to="facebook">
          <li>Facebook</li>
        </Link>
      </ul>
    </div>
  );
}
export default Navbar;
