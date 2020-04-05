import React from "react";
import "./style.css"
import { Link } from "react-router-dom";

function Header() {
  

  return (
    <ul className="navbar-right nav nav-tabs  navB">
      <li className="nav-item">
        <Link className="nav-link"
          to="/">
          Search
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link"
          to="/saved">
          Saved
        </Link>
      </li>
    </ul>
  );
}

export default Header;