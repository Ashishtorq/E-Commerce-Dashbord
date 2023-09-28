import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
const Nav = () => {
  return (
    <div>
      <ul>
        <li className="nav-ul-li">
          <Link className="dash" to="/">
            Home
          </Link>
          <Link className="dash" to="/Product">
            Product
          </Link>
          <Link className="dash" to="/add-product">
            Add Product
          </Link>
          <Link className="dash" to="/update-product">
            Update-Product
          </Link>
          <Link className="dash" to="/logout">
            Log-out
          </Link>
          <Link className="dash" to="/profile">
            Profile
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
