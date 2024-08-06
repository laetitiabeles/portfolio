import React from 'react';
import Welcome from './components/WelcomeSection';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Header from './components/Header';
import './App.css';
import './styles/satoshi.css';
import './fonts.css';

const App = () => {
  return (
    <div className="app">
      <Header />
      <div className="content">
        <Welcome />
        <About />
        <Skills />
        <Projects />
      </div>
      <Footer />
    </div>
  );
};

export default App;
