import React from 'react';
import Welcome from './components/WelcomeSection';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import DotNav from './components/DotNav';
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
      </div>
      <Footer />
    </div>
  );
};

export default App;
