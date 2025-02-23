import React from 'react';
import './AboutMe.css';
import profilePicture from '../../assets/profile.png';  

const AboutMe: React.FC = () => {
  return (
    <div className="about-me-container text-center">
      <h2>About Me</h2>
      <img src={profilePicture} alt="My Picture" className="profile-picture" />
      <p>Hi, I'm Teresa Perez, a passionate and detail-oriented programmer with a strong foundation in full-stack development. With experience in JavaScript, TypeScript, React, and backend technologies like Node.js and PostgreSQL, I love building dynamic, user-friendly applications. My background includes COBOL/CICS programming, database administration, and teaching computer science at the high school level, giving me a unique perspective on problem-solving and software development. I'm always eager to learn new technologies and collaborate on innovative projects. Let's build something great together! </p>
    </div>
  );
};

export default AboutMe;
