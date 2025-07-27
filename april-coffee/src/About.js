import React from 'react';
import { Heart, Users, Coffee } from 'lucide-react';

const About = () => {
  return (
    <section className="about-section">
      <div className="container">
        <div className="section-header">
          <h2>Our Story</h2>
        </div>
        
        <div className="story-content">
          <div className="story-text">
            <p className="story-intro">
              April began as a dream of quiet corners and perfect pours.
            </p>
            <p>
              In 2019, we opened our doors with a simple mission: to create a space where time slows down, 
              conversations deepen, and every cup of coffee is crafted with intention. Named after the month 
              of new beginnings, April represents our belief that great coffee can transform ordinary moments 
              into something extraordinary.
            </p>
            <p>
              We source our beans directly from small farms, roast in small batches, and serve each cup 
              with the care it deserves. But more than coffee, we're building a community—one where 
              neighbors become friends and morning rituals become sacred.
            </p>
          </div>
          
          <div className="story-image">
            <img 
              src="https://images.pexels.com/photos/2159065/pexels-photo-2159065.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
              alt="Coffee shop interior with warm lighting"
              loading="lazy"
            />
          </div>
        </div>
        
        <div className="values">
          <div className="value-item">
            <Heart className="value-icon" size={24} />
            <h3>Crafted with Love</h3>
            <p>Every drink is made with careful attention and genuine passion for the craft.</p>
          </div>
          <div className="value-item">
            <Coffee className="value-icon" size={24} />
            <h3>Quality First</h3>
            <p>We source ethically, roast carefully, and serve only what we're proud of.</p>
          </div>
          <div className="value-item">
            <Users className="value-icon" size={24} />
            <h3>Community Focused</h3>
            <p>April is more than a coffee shop—it's a gathering place for our neighborhood.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;