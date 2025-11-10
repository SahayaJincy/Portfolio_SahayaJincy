import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";



import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ResumeView from "./components/ResumeView";

function App() {
  return (
    <Router>
      <Routes>
        
        <Route
          path="/"
          element={
            <div>
              <Header />
              <section id="home"><Home /></section>
              <section id="about"><About /></section>
              <section id="skills"><Skills /></section>
              <section id="projects"><Projects /></section>
              <section id="contact"><Contact /></section>
            </div>
          }
        />

       
        <Route path="/resume" element={<ResumeView />} />
      </Routes>
    </Router>
  );
}

export default App;
