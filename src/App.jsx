import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Proj from "./components/Proj";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Skills />
      <Proj />
    </div>
  );
};

export default App;
