import React from 'react';
import { Link } from 'react-router-dom';

const Social = () => {
  return (
    <section>
      <h2>Social</h2>
      <ul>
        <li className="footer-list">
          <Link className="footer-link" to="/">
            Instagram
          </Link>
        </li>
        <li className="footer-list">
          <Link className="footer-link" to="/">
            Facebook
          </Link>
        </li>
      </ul>
    </section>
  );
};

export default Social;
