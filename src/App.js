import React from 'react';
import Welcome from './components/WelcomeSection';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import DotNav from './components/DotNav';
import Contact from './components/Contact';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <div className="content">
        <Welcome />
        <About />
        <Skills />
        <Projects />
        <DotNav />
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default App;
