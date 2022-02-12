import React from 'react';
import { FaIdeal, FaCcPaypal, FaCcVisa, FaCcMastercard } from 'react-icons/fa';

const Newsletter = () => {
  return (
    <section>
      <h2>Sign up for our newsletter</h2>
      <form className="newslet_form">
        <input
          className="newslet_form-input"
          type="text"
          placeholder="your@email.com"
        />
        <button className="newslet_form-btn">SIGN UP</button>
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
