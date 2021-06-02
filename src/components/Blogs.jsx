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
        "https://mmestiyak.medium.com/understanding-truthy-falsy-in-javascript-75d25e20029b",
    },
    {
      title: "JavaScript features that confuses beginners",
      description: ``,
      link: "https://mmestiyak.medium.com/javascript-features-that-confuses-beginners-de12f9c78e22",
    },
    {
      title: "React.js features that made it so popular and fun to work with",
      description: ``,
      link: "https://mmestiyak.medium.com/react-js-features-that-made-it-so-popular-and-fun-to-work-with-fefc517f8543",
    },
    {
      title: "JavaScript ES6 Features that make your life easier",
      description: ``,
      link: "https://mmestiyak.medium.com/javascript-es6-features-that-make-your-life-easier-25c5c169833e",
    },
    {
      title: "Functional Programming in JavaScript with map, filter, reduce",
      description: ``,
      link: "https://mmestiyak.medium.com/functional-programming-in-javascript-with-array-built-in-methods-676d2318115",
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
