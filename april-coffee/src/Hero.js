import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = ({ setActiveSection }) => {
  return (
    <section className="hero">
      <div className="hero-background">
        <img 
          src="https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          alt="Steaming coffee cup on wooden table"
          className="hero-image"
        />
        <div className="hero-overlay"></div>
      </div>
      
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">Brewed for slow mornings.</h1>
          <p className="hero-subtitle">
            April is where coffee meets calm. Handcrafted brews, intentional moments.
          </p>
          
          <div className="hero-actions">
            <button 
              className="btn btn-primary"
              onClick={() => setActiveSection('menu')}
            >
              View Menu
              <ArrowRight className="btn-icon" />
            </button>
            <button 
              className="btn btn-secondary"
              onClick={() => setActiveSection('visit')}
            >
              Visit Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;