import React from 'react';
import { Coffee } from 'lucide-react';

const Header = ({ activeSection, setActiveSection }) => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo" onClick={() => setActiveSection('home')}>
            <Coffee className="logo-icon" />
            <span className="logo-text">April</span>
          </div>
          
          <nav className="nav">
            <button 
              className={`nav-item ${activeSection === 'home' ? 'active' : ''}`}
              onClick={() => setActiveSection('home')}
            >
              Home
            </button>
            <button 
              className={`nav-item ${activeSection === 'menu' ? 'active' : ''}`}
              onClick={() => setActiveSection('menu')}
            >
              Menu
            </button>
            <button 
              className={`nav-item ${activeSection === 'about' ? 'active' : ''}`}
              onClick={() => setActiveSection('about')}
            >
              About
            </button>
            <button 
              className={`nav-item ${activeSection === 'visit' ? 'active' : ''}`}
              onClick={() => setActiveSection('visit')}
            >
              Visit Us
            </button>
            
            <button 
              className={`nav-item ${activeSection === 'contact' ? 'active' : ''}`}
              onClick={() => setActiveSection('contact')}
            >
              Contact
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;