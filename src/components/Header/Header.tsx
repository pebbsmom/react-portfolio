import React from 'react';
import './Header.css';
import Navigation from '../Navigation/Navigation';

const Header: React.FC = () => {
  return (
    <header className="header-container #bb8588 text-white text-center py-3">
      <h2 className="portfolio-title">Teresa Perez</h2>
      <Navigation />
    </header>
  );
};

export default Header;
