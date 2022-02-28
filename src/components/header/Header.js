import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import Navigation from '../navigation/Navigation';
import './styles.scss';

const Header = (props) => {
  const [showHeader, setShowHeader] = useState(true);

  const handleShowHeader = () => {
    if (window.scrollY > 80) {
      setShowHeader(false);
    } else {
      setShowHeader(true);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', handleShowHeader);
    return () => {
      window.removeEventListener('scroll', handleShowHeader);
    };
  }, []);

  return (
    <div>
      <header className={`header ${showHeader && 'header-scroll'}`}>
        <div className="logo">
          <Link className="logo-link" to="/">
            Le Bonnet
          </Link>
        </div>
        <Navigation />
      </header>
    </div>
  );
};

Header.defaultProps = {
  currentUser: null,
};

export default Header;
