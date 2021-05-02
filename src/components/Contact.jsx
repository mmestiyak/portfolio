import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Contact = () => {
  return (
    <div id="contact" className="section contact ">
      <div className="container px-5 ">
        <h2 className="title">Contact me</h2>
        <h3 className="subtitle is-4">
          Do you have an interesting project that matches my skill set? Let's
          talk!
        </h3>
        <a href="mailto:mmestiyak@gmail.com" className="subtitle email">
          mmestiyak@gmail.com
        </a>
        <div className="social-links mt-4">
          <a target="_blank" href="https://linkedin.com/in/mmestiyak">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a target="_blank" href="https://github.com/mmestiyak">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a target="_blank" href="https://twitter.com/mmestiyak">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
