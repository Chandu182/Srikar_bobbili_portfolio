import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import myImage from './uFRLS5Nqt6lwyrDqhEba2-transformed.webp'
import './AboutMe.css'; // Add your styles here

const AboutMe = () => {
  // State for the experience counter
  const [experience, setExperience] = useState(0);
  const totalExperience = 9; // Total years of experience (You can update this as needed)

  useEffect(() => {
    // Increment experience to reach the totalExperience value
    const incrementExperience = () => {
      if (experience < totalExperience) {
        setExperience(prevExp => prevExp + 1);
      }
    };
    
    const timer = setInterval(incrementExperience, 100); // Increment every 100ms

    return () => clearInterval(timer); // Cleanup interval when component unmounts
  }, [experience, totalExperience]);

  return (
    <div className="about-me" id='About'>
      <div className="about-me-container">
        <div className="about-me-content">
          <h1>About Me</h1>
          <p>
            Hi! I'm <h1><b>Srikar Bobbili</b></h1>, a technical skill trainer with over {experience} years of experience. 
            I specialize in technical training and have been working with APSSDC since 2020. My journey 
            spans across various industries where I've developed my skills in software development, 
            technical administration, and project management.
          </p>

          {/* Experience Counter */}
          <div className="experience-counter">
            <h2>Experience: {experience}+ years</h2>
          </div>

          {/* Social Media Icons */}
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/thumma-chandra-kiran" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            <a href="https://github.com/chandu182" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
            <a href="https://x.com/chandra_thumma" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
          </div>
        </div>
      </div>
      <div className="profile">
        <div className="profile_wrapper">

        </div>
      </div>
    </div>
  );
};

export default AboutMe;
