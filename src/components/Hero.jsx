import React from "react";
import profilePicture from "../images/profile.jpg";
import { Link } from "react-scroll";
const Hero = () => {
  return (
    <div className="section">
      <div className="container hero">
        <figure>
          <img src={profilePicture} alt="" />
        </figure>
        <h2>
          Hi,
          <Link
            smooth={true}
            duration={500}
            to="about"
            className="link-underline mx-2"
          >
            i'm
          </Link>
          a web developer
        </h2>
        <h2>I love HTML, CSS especially javaScript</h2>
      </div>
    </div>
  );
};

export default Hero;
