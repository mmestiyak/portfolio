import React from "react";
import { Route } from "react-router";
import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import "./styles/app.scss";

const App = () => {
  return (
    <>
      <Route path="/">
        {/* <Navbar /> */}
        <Hero />
        <About />
      </Route>
    </>
  );
};

export default App;
