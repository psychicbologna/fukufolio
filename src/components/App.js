import React from "react";
import Header from "./Header/Header";
import About from "./About/About";
import Skills from "./Skills/Skills";
import Projects from "./Projects/Projects";
import Contact from "./Contact/Contact";
import store from "./store";
import "./normalize.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <About />
        <Skills skills={store.skills} />
        <Projects projects={store.projects} />
        <Contact />
      </main>
    </div>
  );
}

export default App;
