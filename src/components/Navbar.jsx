import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      class="navbar  is-transparent"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="container">
        <div class="navbar-brand">
          <a class="navbar-item logo">&lt;meer/&gt;</a>

          <a role="button" class="navbar-burger" href="#">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div className="navbar-menu navbar-end">
          <div className="navbar-item text-gradient">
            <Link to="/about">About</Link>
          </div>
          <div className="navbar-item text-gradient">
            <Link to="/skills">Skills</Link>
          </div>
          <div className="navbar-item text-gradient">
            <Link to="/projects">Projects</Link>
          </div>
          <div className="navbar-item text-gradient">
            <Link to="/Contact">Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
