import React from "react";
import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import SocialLink from "./components/SocialLink";
import Contact from "./components/Contact";
import Works from "./components/Works";
import Skill from "./components/Skills";
const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skill />
      <Works />
      <Contact />
      <SocialLink />
    </div>
  );
};

export default App;
