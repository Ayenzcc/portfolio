import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Proj from "./components/Proj";
import Analytics from "./components/Analytics";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Proj />
      <Analytics />
    </div>
  );
};

export default App;
