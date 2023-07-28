import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Proj from "./components/Proj";
import Aboutme from "./components/Aboutme";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Skills />
      <Proj />
      <Aboutme />
      <Footer />
    </div>
  );
};

export default App;
