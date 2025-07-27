import React from 'react';
import { MapPin, Clock, Phone, Camera } from 'lucide-react';

const VisitUs = () => {
  const galleryImages = [
    {
      id: 1,
      src: "https://images.pexels.com/photos/2977304/pexels-photo-2977304.jpeg",
      alt: "Cozy seating area with warm lighting"
    },
    {
      id: 2,
      src: "https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg",
      alt: "Coffee bar with barista at work"
    },
    {
      id: 3,
      src: "https://images.pexels.com/photos/2351274/pexels-photo-2351274.jpeg",
      alt: "Reading nook with books and plants"
    },
    {
      id: 4,
      src: "https://images.pexels.com/photos/2041540/pexels-photo-2041540.jpeg",
      alt: "Outdoor seating with morning sun"
    },
    {
      id: 5,
      src: "https://images.pexels.com/photos/1002740/pexels-photo-1002740.jpeg",
      alt: "Coffee equipment and brewing station"
    },
    {
      id: 6,
      src: "https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg",
      alt: "Community board and local art"
    }
  ];

  const locationInfo = [
    {
      id: 1,
      icon: <MapPin className="info-icon" size={24} />,
      title: "Location",
      content: "Adwa street\nAddis Ababa , Ethiopia"
    },
    {
      id: 2,
      icon: <Clock className="info-icon" size={24} />,
      title: "Hours",
      content: "Monday - Sunday\n7:00 AM - 3:00 PM\nClosed on full moons"
    },
    {
      id: 3,
      icon: <Phone className="info-icon" size={24} />,
      title: "Contact",
      content: "+251924548716\naprilcoffee@gmail.com"
    }
  ];

  return (
    <section className="visit-section">
      <div className="container">
        <div className="section-header">
          <h2>Visit Us</h2>
          <p>Find us in the heart of downtown, where every morning feels like a fresh start.</p>
        </div>
        
        <div className="visit-content">
          <div className="location-info">
            {locationInfo.map((info) => (
              <div key={info.id} className="info-card">
                {info.icon}
                <div>
                  <h3>{info.title}</h3>
                  <p style={{ whiteSpace: 'pre-line' }}>{info.content}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="gallery-section">
            <div className="gallery-header">
              <Camera className="gallery-icon" size={24} />
              <h3>Our Space</h3>
            </div>
            
            <div className="photo-gallery">
              {galleryImages.map((image) => (
                <div key={image.id} className="gallery-item">
                  <img 
                    src={image.src} 
                    alt={image.alt} 
                    loading="lazy"
                    onError={(e) => {
                      e.target.onerror = null; 
                      e.target.src = '/placeholder-coffee.jpg';
                    }}
                  />
                  <div className="gallery-overlay">
                    <span>{image.alt}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="visit-note">
            <p>
              Can't make it in? Follow us on social media for daily coffee inspiration, 
              or sign up for our newsletter to stay connected with the April community.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisitUs;