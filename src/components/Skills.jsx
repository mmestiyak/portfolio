import React from "react";

const Skills = () => {
  return (
    <div id="skills" className="section">
      <div className="container px-5 skills">
        <h2 className="title is-3">skills</h2>
        <h3 className="subtitle is-4">
          See some of my core skills at a glance
        </h3>
        <div className="mb-5">
          <h3 className="is-size-4 mb-2">Front End</h3>
          <ul>
            <li>javaScript (ES6 + ESNext)</li>
            <li>React.js</li>
            <li>Redux</li>
            <li>Material UI</li>
            <li>Bootstrap</li>
            <li>Sass</li>
            <li>CSS3</li>
            <li>HTML5</li>
          </ul>
        </div>
        <div className="mb-5">
          <h3 className="is-size-4 mb-2">Back End</h3>
          <ul>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>MongoDB</li>
            <li>Mongoose</li>
            <li>RESTful API</li>
          </ul>
        </div>

        <div className="mb-5">
          <h3 className="is-size-4 mb-2">UX/UI Design</h3>
          <ul>
            <li>Flat Design</li>
            <li>Usability Principles</li>
            <li>Colors</li>
          </ul>
        </div>
        <div className="mb-5">
          <h3 className="is-size-4 mb-2">Tools</h3>
          <ul>
            <li>Git</li>
            <li>npm</li>
            <li>babel</li>
            <li>webpack</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
