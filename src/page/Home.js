import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Portfolio from "../components/Portfolio";
import Publications from "../components/Publications";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Portfolio />
      <Publications />
      <Contact />
    </>
  );
};

export default Home;