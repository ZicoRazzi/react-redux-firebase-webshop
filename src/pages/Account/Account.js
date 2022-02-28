import React from 'react';
import SignIn from '../../components/signin/SignIn';
import SignUp from '../../components/signup/SignUp';
import BgImage from '../../assets/images/account-bg.jpg';
import BgImage2 from '../../assets/images/account-bg-2.png';
import './style.scss';

const Account = (props) => {
  return (
    <>
      <div className="account">
        <div
          className="registration-container"
          style={{
            backgroundImage: `url(${BgImage})`,
          }}
        >
          <SignUp />
        </div>
        <div
          className="login-container"
          style={{
            backgroundImage: `url(${BgImage2})`,
          }}
        >
          <SignIn />
        </div>
      </div>
    </>
  );
};

export default Account;
