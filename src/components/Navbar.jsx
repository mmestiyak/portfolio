import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { Link as RouteLink } from 'react-router-dom';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const handleClick = () => {
    setIsMobile(!isMobile);
  };
  return (
    <nav
      className="navbar  is-transparent"
      role="navigation"
      aria-label="main navigation"
    >
      <div className={`container`}>
        <div className="navbar-brand ">
          <a
            rel="noreferrer"
            onClick={handleClick}
            role="button"
            className={`navbar-burger ${isMobile ? `is-active` : ''}`}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div className={`navbar-menu ${isMobile && `is-active`}`}>
          <div className="navbar-item  ">
            <Link smooth={true} duration={500} to="about">
              about
            </Link>
          </div>
          <div className="navbar-item  ">
            <Link smooth={true} duration={700} to="skills">
              skills
            </Link>
          </div>

          <div className="navbar-item  ">
            <Link smooth={true} duration={1000} to="projects">
              Projects
            </Link>
          </div>

          <div className="navbar-item  ">
            <Link smooth={true} duration={1500} to="contact">
              contact
            </Link>
          </div>
          <div className="navbar-item  ">
            <RouteLink to="/blogs">blogs</RouteLink>
          </div>
          <div className="navbar-item">
            <a
              rel="noreferrer"
              className="resume"
              href="https://drive.google.com/uc?export=download&id=19j6smZjyw3ldfWdJC08IXhrNRdJzJQcy"
            >
              resume
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
