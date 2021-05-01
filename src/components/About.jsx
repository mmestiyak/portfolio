import React from "react";
import { Link } from "react-scroll";

const About = () => {
  return (
    <div id="about" className="section about">
      <div className="container px-5">
        <h2 className="title is-3">About</h2>
        <p className="subtitle is-4">
          I'm Meer estiyak from a small beautiful country Bangladesh. I’m a
          passionate and pragmatic front end developer with 2 years of
          professional experience, specializing in full-stack development using
          Node.js Technologies on the backend.
        </p>
        <p className="subtitle is-4">
          Strong in object-oriented analysis and design and experienced with a
          wide range of front-end and back-end
          <Link
            smooth={true}
            duration={500}
            to="skills"
            className="link-underline mx-2"
            activeClass="active"
          >
            frameworks
          </Link>
          . Also, being an artist in nature, I have a good sense of design,
          colors, usability and can build beautiful and modern interfaces that
          people love.
        </p>
        <p className="subtitle is-4">
          When I'm not coding, i'm a cyclist and photographer and so far. want
          to know more about me? keep{" "}
          <Link
            smooth={true}
            duration={500}
            to="skills"
            className="link-underline mx-2"
            activeClass="active"
          >
            scrolling
          </Link>
          😀
        </p>
      </div>
    </div>
  );
};

export default About;
