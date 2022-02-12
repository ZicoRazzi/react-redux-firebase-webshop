import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section>
      <h2>About Le Bonnet</h2>
      <ul>
        <li className="footer-list">
          <Link className="footer-link" to="/">
            Store Locator
          </Link>
        </li>
        <li className="footer-list">
          <Link className="footer-link" to="/">
            Journal
          </Link>
        </li>
        <li className="footer-list">
          <Link className="footer-link" to="/">
            Contact
          </Link>
        </li>
        <li className="footer-list">
          <Link className="footer-link" to="/">
            Gift Card
          </Link>
        </li>
      </ul>
    </section>
  );
};

export default About;
