import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import React from 'react';
import Slider from "react-slick";
import './Projects.css'

const EmploymentSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
  };

  return (
    <div className="project_container" id="projects">
      <h2> Employment Experience </h2>
      <Slider {...settings}>
        {/* Slide 1 - Honeywell Automation */}
        <div className="project_element">
          <h3 className="project_company_title">Honeywell Automation (TCS)</h3>
          <p className="project_role"><strong>Role:</strong> Building Management Systems (BMS) Service Engineer & Technical Admin Support</p>
          <p className="projects_duration"><strong>Duration:</strong> April 2016 – November 2019</p>
          <ul className="project_list">
            <li>Client interaction, analytics, vendor coordination, and reporting.</li>
            <li>Managed BMS, HVAC, UPS, and other critical utilities.</li>
            <li>Prepared daily, weekly, and monthly reports for clients.</li>
            <li>Created accruals, journal entries, and documented procedures.</li>
          </ul>
        </div>

        {/* Slide 2 - I CUBE Solutions */}
        <div className="project_element">
          <h3 className="project_company_title">I CUBE Solutions</h3>
          <p className="project_role"><strong>Role:</strong> Project Testing Engineer</p>
          <p className="projects_duration"><strong>Duration:</strong> June 2014 – March 2016</p>
          <ul className="project_list">
            <li>Conducted C# and VB.NET-based project testing as per client requirements.</li>
            <li>Developed SQL queries and managed databases.</li>
            <li>Handled client issues, including SQL server installations and testing.</li>
          </ul>
        </div>

        {/* Slide 3 - APSSDC */}
        <div className="project_element">
          <h3 className="project_company_title">AP State Skill Development Corporation (APSSDC)</h3>
          <p className="project_role"><strong>Role:</strong> Technical Skill Trainer</p>
          <p className="projects_duration"><strong>Duration:</strong> March 2020 – Present</p>
          <ul className="project_list">
            <li>Managed engineering programs, internship training, and drone pilot programs.</li>
            <li>Handled training statuses, coordinated with colleges, and organized online sessions.</li>
            <li>Created reports, designed flyers, and handled social media platforms.</li>
            <li>Proficient in Power BI, Power Apps, CRM, and video editing tools like Premiere Pro and Photoshop.</li>
          </ul>
        </div>
      </Slider>
    </div>
  );
};

export default EmploymentSlider;
