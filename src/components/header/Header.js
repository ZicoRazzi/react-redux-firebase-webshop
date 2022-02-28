import React from 'react';

import { Link } from 'react-router-dom';
import Navigation from '../navigation/Navigation';
import './styles.scss';

const Header = (props) => {
  return (
    <div>
      <header className="header">
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
