import React, { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [navbarClass, setNavbarClass] = useState("container");
  const handleAboutActive = () => {
    setNavbarClass("container-active");
  };

  return (
    <nav
      class="navbar  is-transparent"
      role="navigation"
      aria-label="main navigation"
    >
      <div className={`${navbarClass}`}>
        <div class="navbar-brand">
          <a role="button" class="navbar-burger" href="#">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div className="navbar-menu ">
          <div className="navbar-item text-gradient">
            <Link smooth={true} duration={500} to="about">
              about
            </Link>
          </div>
          <div className="navbar-item text-gradient">
            <Link
              smooth={true}
              duration={700}
              to="skills"
              spy={true}
              activeClass="active"
            >
              skills
            </Link>
          </div>
          <div className="navbar-item text-gradient">
            <Link
              smooth={true}
              duration={1000}
              to="projects"
              spy={true}
              activeClass="active"
            >
              Projects
            </Link>
          </div>
          <div className="navbar-item text-gradient">
            <Link
              smooth={true}
              duration={1500}
              to="contact"
              spy={true}
              activeClass="active"
            >
              contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
