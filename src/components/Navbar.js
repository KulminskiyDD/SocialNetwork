import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="App-nav">
      <div>
        <NavLink to="/profile">Profile</NavLink>
      </div>
      <div>
        <NavLink to="/dialogs">Messages</NavLink>
      </div>
      <div>
        <NavLink to="#s">News</NavLink>
      </div>
      <div>
        <NavLink to="#s">Music</NavLink>
      </div>
      <div>
        <NavLink to="#s">Settings</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
