import React from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Project.css';

interface ProjectProps {
  title: string;
  image: string;
  deployedLink: string;
  repoLink: string;
  isDeployed: boolean;
}

const Project: React.FC<ProjectProps> = ({ title, image, deployedLink, repoLink, isDeployed }) => {
  return (
    <div className="card project-card">
      <img src={image} className="card-img-top" alt={title} />
      <div className="card-body text-center">
        <h5 className="card-title">{title}</h5>
        {isDeployed ? (
          <a
            href={deployedLink}
            className="btn btn-primary d-flex align-items-center justify-content-center gap-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaExternalLinkAlt size={18} /> <span>View Project</span>
          </a>
        ) : (
          <p className="text-alert">
            This project is not deployed and can only be found on GitHub.
          </p>
        )}
        <a
          href={repoLink}
          className="btn btn-secondary d-flex align-items-center justify-content-center gap-2 mt-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={18} /> <span>GitHub Repo</span>
        </a>
      </div>
    </div>
  );
};

export default Project;