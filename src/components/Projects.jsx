import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Projects = () => {
  return (
    <div className="section">
      <div className="container projects px-5">
        <h2 className="title">projects</h2>
        <h3 className="subtitle is-4 mb-5">
          Checkout Some of my recent projects here
        </h3>
        <div className="columns ">
          <div className="column is-4 is-flex ">
            <div class="card ">
              <header class="card-header card-header--1  is-shadowless   is-flex is-align-items-center is-justify-content-center">
                <h3 className="is-size-3 has-text-centered">HUDHUD RIDERS</h3>
              </header>
              <div class="card-content ">
                <div class="content">
                  <h2>Ride Sharing App</h2>
                  <div className="mt-5">
                    <FontAwesomeIcon
                      className="mr-3 is-clickable"
                      style={{ fontSize: "2rem" }}
                      icon={faGithub}
                    />
                    <FontAwesomeIcon
                      className="is-clickable"
                      style={{ fontSize: "2rem" }}
                      icon={faGlobe}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="column is-4 is-flex ">
            <div class="card ">
              <header class="card-header card-header--2  is-shadowless   is-flex is-align-items-center is-justify-content-center">
                <h3 className="is-size-3 has-text-centered">TRUE COLORS</h3>
              </header>
              <div class="card-content ">
                <div class="content">
                  <h2>Painting Agency Website</h2>
                  <div className="mt-5">
                    <FontAwesomeIcon
                      className="mr-3 is-clickable"
                      style={{ fontSize: "2rem" }}
                      icon={faGithub}
                    />
                    <FontAwesomeIcon
                      className="is-clickable"
                      style={{ fontSize: "2rem" }}
                      icon={faGlobe}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="column is-4 is-flex ">
            <div class="card ">
              <header class="card-header card-header--3  is-shadowless   is-flex is-align-items-center is-justify-content-center">
                <h3 className="is-size-3 has-text-centered">Meer's Bag</h3>
              </header>
              <div class="card-content ">
                <div class="content">
                  <h2>E-comerce Landing Page</h2>
                  <div className="mt-5">
                    <FontAwesomeIcon
                      className="mr-3 is-clickable"
                      style={{ fontSize: "2rem" }}
                      icon={faGithub}
                    />
                    <FontAwesomeIcon
                      className="is-clickable"
                      style={{ fontSize: "2rem" }}
                      icon={faGlobe}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;