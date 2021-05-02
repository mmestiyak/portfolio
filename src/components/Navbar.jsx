import React, { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const handleClick = () => {
    setIsMobile(!isMobile);
  };
  return (
    <nav
      class="navbar  is-transparent"
      role="navigation"
      aria-label="main navigation"
    >
      <div className={`container`}>
        <div class="navbar-brand ">
          <a
            onClick={handleClick}
            role="button"
            class={`navbar-burger ${isMobile ? `is-active` : ""}`}
            href="#"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div class={`navbar-menu ${isMobile && `is-active`}`}>
          <div className="navbar-item text-gradient">
            <Link smooth={true} duration={500} to="about">
              about
            </Link>
          </div>
          <div className="navbar-item text-gradient">
            <Link smooth={true} duration={700} to="skills">
              skills
            </Link>
          </div>
          <div className="navbar-item text-gradient">
            <Link smooth={true} duration={1000} to="projects">
              Projects
            </Link>
          </div>
          <div className="navbar-item text-gradient">
            <Link smooth={true} duration={1500} to="contact">
              contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
