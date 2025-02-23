import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer-container text-white text-center py-3" style={{ backgroundColor: '#bb8588' }}>
      <p>&copy; 2025 Teresa Perez | All Rights Reserved</p>
      <div className="social-icons mt-2">
        <a href="https://github.com/pebbsmom" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
          <FaGithub size={24} />
        </a>
        <a href="https://linkedin.com/in/teresa-perez-8a37856b" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
          <FaLinkedin size={24} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;