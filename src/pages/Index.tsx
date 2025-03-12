
import React, { useEffect } from "react";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Team from "../components/Team";
import Contact from "../components/Contact";

const Index: React.FC = () => {
  useEffect(() => {
    // Scroll to top on component mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Team />
      <Contact />
    </Layout>
  );
};

export default Index;
