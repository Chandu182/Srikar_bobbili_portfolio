import React from 'react';
import './skills.css'; // Import your CSS file for styling

// Import logos
import msOffice from './assets/MS__OFFICE.png';
import crm from './assets/crm.png';
import powerBI from './assets/Power Bi.png';
import powerApps from './assets/powerApps.png';
import sharePoint from './assets/sharePoint.png';
import mySQL from './assets/mysql.png';
import Tableau from './assets/Tableau.png';
import digitalMarketing from './assets/digitalMarketing.png';
import cHash from './assets/chash.png';
import davinciResolve from './assets/davinciResolve.png';

// Import FontAwesome for star icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarEmpty } from '@fortawesome/free-regular-svg-icons';

const SkillsGrid = () => {
  // Array of skills with their corresponding logos and levels (1-5)
  const skills = [
    { id: 1, name: 'MS OFFICE', logo: msOffice, level: 5 },
    { id: 2, name: 'CRM', logo: crm, level: 4 },
    { id: 3, name: 'POWER BI', logo: powerBI, level: 4.5 },
    { id: 4, name: 'POWER APPS', logo: powerApps, level: 4 },
    { id: 5, name: 'SHARE POINT', logo: sharePoint, level: 3.5 },
    { id: 6, name: 'MySQL', logo: mySQL, level: 4 },
    { id: 7, name: 'TABLEAU', logo: Tableau, level: 3.5 },
    { id: 8, name: 'DIGITAL MARKETING', logo: digitalMarketing, level: 4 },
    { id: 9, name: 'C#', logo: cHash, level: 3 },
    { id: 10, name: 'DAVINCI RESOLVE', logo: davinciResolve, level: 4 }
  ];

  // Function to render star ratings based on skill level
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating); // Number of full stars
    const hasHalfStar = rating % 1 !== 0; // Check if there's a half star
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0); // Remaining empty stars

    return (
      <div className="stars">
        {[...Array(fullStars)].map((_, i) => (
          <FontAwesomeIcon key={i} icon={faStar} className="star-icon" />
        ))}
        {hasHalfStar && <FontAwesomeIcon icon={faStarHalfAlt} className="star-icon" />}
        {[...Array(emptyStars)].map((_, i) => (
          <FontAwesomeIcon key={i} icon={faStarEmpty} className="star-icon" />
        ))}
      </div>
    );
  };

  return (
    <div className="container" id='skills'>
      <h1>MY SKILLS</h1>
    <div className="skills-grid">
      {skills.map((skill) => (
        <div key={skill.id} className="skill-item">
          <img src={skill.logo} alt={skill.name} className="skill-logo" />
          <div className="skill-name">{skill.name}</div>
          <div className="skill-level">
            {renderStars(skill.level)} {/* Render star ratings */}
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default SkillsGrid;
