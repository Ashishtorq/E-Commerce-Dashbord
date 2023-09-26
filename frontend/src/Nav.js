import React from "react";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/product">prodcut</Link>
        </li>
        <li>
          <Link to="/add_pro">Add </Link>
        </li>
        <li>
          <Link to="/remove_pro">REmove</Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
