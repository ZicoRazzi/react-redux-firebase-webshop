import React from 'react';
import About from './About';
import FAQ from './FAQ';
import Social from './Social';
import Newsletter from './Newsletter';

import './style.scss';

const Footer = (props) => {
  return (
    <footer className="footer">
      <About />
      <FAQ />
      <Social />
      <Newsletter />
    </footer>
  );
};

export default Footer;
