import React, { Component } from 'react';
import SignUp from '../../components/signup/SignUp';
import './style.scss';

class Registration extends Component {
  render() {
    return (
      <div className="registration">
        <SignUp />
      </div>
    );
  }
}

export default Registration;
