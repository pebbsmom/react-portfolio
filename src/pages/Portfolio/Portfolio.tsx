import React from 'react';
import Project from '../../components/Project/Project';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Portfolio.css';
import comingSoon from '../../../src/assets/coming-soon.png'; 
import employeeTracker from '../../../src/assets/employee-tracker.jpg'; 
import vehiclesApplication from '../../../src/assets/vehicles-application.jpg'; 
import weatherApp from '../../../src/assets/weatherapp.jpg'; 
import README from '../../../src/assets/README.jpg';

  const projects = [
    {
      title: 'Weather Application',
      image: weatherApp,
      deployedLink: 'https://weather-application1-176o.onrender.com',
      repoLink: 'https://github.com/pebbsmom/weather-application',
    },
    {
      title: 'README Generator',
      image: README,
      deployedLink: '',
      repoLink: 'https://github.com/pebbsmom/professional-readme',
    },
    {
      title: 'Employee Tracker',
      image: employeeTracker,
      deployedLink: '',
      repoLink: 'https://github.com/pebbsmom/employee-tracker',
    },
    { 
      title: 'Vehicles Application',
      image: vehiclesApplication, 
      deployedLink: '',
      repoLink: 'https://github.com/pebbsmom/week-8-challenge',
    },
    {
      title: 'Project Five',
      image: comingSoon,
      deployedLink: 'https://projectfive.com',
      repoLink: 'https://github.com/user/projectfive',
      
    },
    {
      title: 'Project Six',
      image: comingSoon,
      deployedLink: 'https://projectsix.com',
      repoLink: 'https://github.com/user/projectsix',
    },
    
  ];
  const Portfolio: React.FC = () => {
  return (
    <div className="portfolio-container">
      <h2 className="text-center">Portfolio</h2>
      <div className="row">
        {projects.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            image={project.image}
            deployedLink={project.deployedLink}
            repoLink={project.repoLink}
            isDeployed={!!project.deployedLink}
                    />
                  ))}
                </div>
              </div>
            );
          };
          
          export default Portfolio;
