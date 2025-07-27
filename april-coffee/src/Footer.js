import React from 'react';
import { Coffee, Heart, Instagram, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="footer-logo">
              <Coffee className="logo-icon" />
              <span className="logo-text">April</span>
            </div>
            <p className="footer-tagline">
              Where coffee meets calm.<br />
              Handcrafted brews, intentional moments.
            </p>
            
            <div className="footer-social">
              <a href="#" className="social-link" aria-label="Instagram">
                <Instagram />
              </a>
              <a href="#" className="social-link" aria-label="Email">
                <Mail />
              </a>
              <a href="#" className="social-link tiktok" aria-label="TikTok">
                <div className="tiktok-icon">♪</div>
              </a>
            </div>
          </div>
          
          <div className="footer-info">
            <div className="footer-section">
              <h4>Visit</h4>
              <p>
                Adwa street<br />
                Addis Abeba, Ethiopia
                
              </p>
            </div>
            
            <div className="footer-section">
              <h4>Hours</h4>
              <p>
                Monday - Sunday<br />
                7:00 AM - 3:00 PM<br />
                <em>Closed on full moons</em>
              </p>
            </div>
            
            <div className="footer-section">
              <h4>Contact</h4>
              <p>
                aprilcoffee@gmail.com
                
                
              </p>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="footer-note">
            serve with <Heart className="heart-icon" /> in Ethiopia, Addis Ababa
          </p>
          <p className="footer-copyright">
            © 2025 April Coffee Corner. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;