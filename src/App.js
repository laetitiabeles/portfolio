import React from 'react';
import Header from './components/Header';
import Welcome from './components/WelcomeSection';
import Presentation from './components/Presentation';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="app">
      <Header />
      <Welcome />
      <Presentation />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
};

export default App;
