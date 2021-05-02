import React from "react";
import { Route } from "react-router";
import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import "./styles/app.scss";

const App = () => {
  return (
    <>
      <Route path="/">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Footer />
      </Route>
    </>
  );
};

export default App;
