import React from 'react';
import { FaIdeal, FaCcPaypal, FaCcVisa, FaCcMastercard } from 'react-icons/fa';

const Newsletter = () => {
  return (
    <section className="newsletter-section">
      <h2>Sign up for our newsletter</h2>
      <form className="newsletter_form">
        <input
          className="newsletter_form-input"
          type="text"
          placeholder="your@email.com"
        />
        <button className="newsletter_form-btn">SIGN UP</button>
      </form>
      <div className="payment_options">
        <FaIdeal />
        <FaCcPaypal />
        <FaCcVisa />
        <FaCcMastercard />
      </div>
    </section>
  );
};

export default Newsletter;
