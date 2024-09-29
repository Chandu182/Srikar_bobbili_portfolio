import './App.css';
import Education from './component/Education/Education';
import Experience from './component/Experience/Experience';
import SkillsGrid from './component/Skills/skills';
import AboutMe from './component/AboutMe/AboutMe';
import Navbar from './component/Navbar/Navbar';
import EmploymentSlider from './component/Projetcs/Projects';
import ContactSection from './component/contact/contact';
import { Component } from 'react';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <AboutMe/>
      <Education/>
      <Experience/>
      <EmploymentSlider/>
      <SkillsGrid/>
      <ContactSection/>
    </div>
  );
}

export default App;
