import React from 'react';
import Project from '../../components/Project/Project';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Portfolio.css';


  const projects = [
    {
      title: 'Weather Application',
      image: '../../src/assets/weatherapp.jpg',
      deployedLink: 'https://weather-application1-176o.onrender.com',
      repoLink: 'https://github.com/pebbsmom/weather-application',
    },
    {
      title: 'README Generator',
      image: '../../src/assets/README.jpg',
      deployedLink: '',
      repoLink: 'https://github.com/pebbsmom/professional-readme',
    },
    {
      title: 'Employee Tracker',
      image: '../../src/assets/employee-tracker.jpg',
      deployedLink: '',
      repoLink: 'https://github.com/pebbsmom/employee-tracker',
    },
    { 
      title: 'Vehicles Application',
      image: '../../src/assets/vehicles-application.jpg', 
      deployedLink: '',
      repoLink: 'https://github.com/pebbsmom/week-8-challenge',
    },
    {
      title: 'Project Five',
      image: '../../src/assets/coming-soon.png',
      deployedLink: 'https://projectfive.com',
      repoLink: 'https://github.com/user/projectfive',
      
    },
    {
      title: 'Project Six',
      image:  '../../src/assets/coming-soon.png',
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
