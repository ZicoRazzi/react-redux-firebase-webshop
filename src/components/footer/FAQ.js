import React from 'react';
import { Link } from 'react-router-dom';

const FAQ = () => {
  return (
    <section>
      <h2>FAQ</h2>
      <ul>
        <li className="footer-list">
          <Link className="footer-link" to="/">
            Terms &amp; Conditions
          </Link>
        </li>
        <li className="footer-list">
          <Link className="footer-link" to="/">
            Privacy &amp; Cookies
          </Link>
        </li>
        <li className="footer-list">
          <Link className="footer-link" to="/">
            Returns &amp; Exchanges
          </Link>
        </li>
      </ul>
    </section>
  );
};

export default FAQ;
