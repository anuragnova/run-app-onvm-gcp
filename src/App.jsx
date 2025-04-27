import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './pages/about/About';
import TeamSlider from './pages/teamSlider/TeamSlider';
import FuturePlans from './pages/futurePlan/FuturePlans';
import ContactForm from './pages/contact/ContactForm';
import Footer from './components/Footer'

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
          <Footer />
        </main>
      </div>
    </Router>
  );
};

export default App;