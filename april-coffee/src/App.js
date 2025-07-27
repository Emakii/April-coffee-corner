import React, { useState } from 'react';
import Header from './Header';
import Hero from './Hero';
import Menu from './Menu';
import About from './About';
import VisitUs from './Visitus';
import Contact from './Contact';
import Footer from './Footer';
import './index.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const showSection = () => {
    switch (activeSection) {
      case 'menu':
        return <Menu />;
      case 'about':
        return <About />;
      case 'visit':
        return <VisitUs />;
      case 'contact':
        return <Contact />;
      default:
        return <Hero setActiveSection={setActiveSection} />;
    }
  };

  return (
    <div className="App">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      <main>
        {showSection()}
      </main>
      <Footer />
    </div>
  );
}

export default App;