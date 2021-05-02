import React from "react";
import { Route } from "react-router";
import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import "./styles/app.scss";
import Footer from "./components/Footer";
import Blogs from "./components/Blogs";

const App = () => {
  return (
    <>
      <Route exact path="/">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </Route>
      <Route path="/blogs">
        <Blogs />
      </Route>
    </>
  );
};

export default App;
