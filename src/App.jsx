import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './pages/About';
import TeamSlider from './pages/TeamSlider';
import FuturePlans from './pages/FuturePlans';
import ContactForm from './pages/ContactForm';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main className="main-section">
          <About />
          <TeamSlider />
          <FuturePlans />
          <ContactForm />
        </main>
      </div>
    </Router>
  );
};

export default App;