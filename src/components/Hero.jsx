import React from "react";
import profilePicture from "../images/profile.jpg";
const Hero = () => {
  return (
    <div className="section">
      <div className="container hero">
        <figure>
          <img src={profilePicture} alt="" />
        </figure>
        <h2 className="">
          Hello I'm
          <a href="#about" className="link-underline mx-2">
            Meer
          </a>
          , A Front End Developer.
        </h2>
        <h2 className="">I love HTML, CSS especially javaScript</h2>
      </div>
    </div>
  );
};

export default Hero;
