import React from 'react';
import './contact.css';  // Optional if you want to create separate styling

const ContactSection = () => {
  return (
    <div className="contact-section" id='ContactMe'>
      <h2>Contact Me</h2>
      <div className="contact-info">
        <div className="contact-item">
          <i className="fas fa-envelope"></i>
          <a href="mailto:sreekarb009@gmail.com">sreekarb009@gmail.com</a>
        </div>
        <div className="contact-item">
          <i className="fab fa-linkedin"></i>
          <a href="https://www.linkedin.com/in/thumma-chandra-kiran" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
        <div className="contact-item">
          <i className="fab fa-github"></i>
          <a href="https://github.com/chandu182" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
        <div className="contact-item">
          <i className="fab fa-twitter"></i>
          <a href="https://x.com/chandra_thumma" target="_blank" rel="noopener noreferrer">Twitter</a>
        </div>
        </div>
    </div>
  );
};

export default ContactSection;
