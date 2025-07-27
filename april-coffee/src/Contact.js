import React, { useState } from 'react';
import { Mail, Phone, MapPin, Instagram, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, this would send the form data to a server
    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section className="contact-section">
      <div className="container">
        <div className="section-header">
          <h2>Get in Touch</h2>
          <p>We'd love to hear from you. Drop us a line and we'll get back to you soon.</p>
        </div>
        
        <div className="contact-content">
          <div className="contact-info">
            <h3>Visit, Call, or Connect</h3>
            <p>
              Whether you have questions about our coffee, want to host an event, 
              or just want to say hello, we're here for you.
            </p>
            
            <div className="contact-methods">
              <div className="contact-method">
                <MapPin className="contact-icon" />
                <div>
                  <strong>Visit Us</strong>
                  <p>Adwa Street<br />Ethiopia,Addis Abeba</p>
                </div>
              </div>
              
              <div className="contact-method">
                <Phone className="contact-icon" />
                <div>
                  <strong>Call Us</strong>
                  <p>+251924548716<br />Mon-Sun</p>
                </div>
              </div>
              
              <div className="contact-method">
                <Mail className="contact-icon" />
                <div>
                  <strong>Email Us</strong>
                  <p>aprilcoffee@gmail.com<br />We reply within 24 hours</p>
                </div>
              </div>
            </div>
            
            <div className="social-links">
              <h4>Follow Our Journey</h4>
              <div className="social-buttons">
                <button className="social-link instagram">
                  <Instagram />
                  <span>@aprilcoffee</span>
                </button>
                <button className="social-link tiktok">
                  <div className="tiktok-icon">♪</div>
                  <span>@aprilcoffee</span>
                </button>
              </div>
            </div>
          </div>
          
          <div className="contact-form-container">
            {!submitted ? (
              <form className="contact-form" onSubmit={handleSubmit}>
                <h3>Send us a Message</h3>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select a topic</option>
                    <option value="general">General Inquiry</option>
                    <option value="catering">Catering & Events</option>
                    <option value="wholesale">Wholesale Orders</option>
                    <option value="feedback">Feedback</option>
                    <option value="press">Press & Media</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    placeholder="Tell us what's on your mind..."
                    required
                  ></textarea>
                </div>
                
                <button type="submit" className="btn btn-primary">
                  Send Message
                  <Send className="btn-icon" />
                </button>
              </form>
            ) : (
              <div className="form-success">
                <div className="success-icon">✨</div>
                <h3>Message Sent!</h3>
                <p>
                  Thank you for reaching out. We've received your message and 
                  will get back to you within 24 hours. In the meantime, 
                  why not stop by for a cup of coffee?
                </p>
                <button 
                  className="btn btn-secondary"
                  onClick={() => setSubmitted(false)}
                >
                  Send Another Message
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;