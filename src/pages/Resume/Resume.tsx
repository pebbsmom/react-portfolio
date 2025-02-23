import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import resumeFile from './Resume.pdf';

const Resume: React.FC = () => {
  return (
    <div className="container text-center">
      <h2>Resume</h2>
     
      <a href={resumeFile} download className="btn btn-primary mb-4">Download Resume</a>
      
      <h3>Proficiencies</h3>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">JavaScript (ES6+)</li>
        <li className="list-group-item">TypeScript</li>
        <li className="list-group-item">React.js</li>
        <li className="list-group-item">Node.js</li>
        <li className="list-group-item">Express.js</li>
        <li className="list-group-item">SQL & PostgreSQL</li>
        <li className="list-group-item">Git & GitHub</li>
        <li className="list-group-item">HTML & CSS</li>
        <li className="list-group-item">Bootstrap</li>
      </ul>
    </div>
  );
};

export default Resume;

