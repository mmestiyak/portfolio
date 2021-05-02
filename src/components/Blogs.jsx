import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const Blogs = () => {
  const blogs = [
    {
      title: "Understanding Truthy Falsy in javaScript",
      description: ``,
      link:
        "https://mmestiyak1.medium.com/understanding-truthy-falsy-in-javascript-75d25e20029b",
    },
    {
      title: "Understanding 'this' keyword in javaScript",
      description: ``,
      link: "",
    },
    {
      title: "Understanding Prototypal Inheritance in javaScript",
      description: ``,
      link: "",
    },
    {
      title: "Understanding Call Stack & Memory Heap in javaScript",
      description: ``,
      link: "",
    },
  ];
  return (
    <div className="section blogs">
      <div className="container">
        <h3 className="is-size-1 mb-5">
          <Link to="/">
            <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon>
          </Link>
        </h3>
        <h3 className="is-size-2">My Blogs</h3>
        {blogs.map((blog, index) => (
          <h2 key={index + new Date().getTime()} className="is-size-3">
            <span title={blog.link ? "" : "will be avaiable soon"}>
              <a
                target="_blank"
                rel="noreferrer"
                href={`${blog.link ? blog.link : ""}`}
                style={{
                  color: `${blog.link ? "curentColor" : "#bfbfbf"}`,
                  pointerEvents: `${blog.link ? "all" : "none"}`,
                }}
              >
                {index + 1}. {blog.title}
              </a>
            </span>
          </h2>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
