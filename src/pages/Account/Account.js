import React from 'react';
import SignIn from '../../components/signin/SignIn';
import './style.scss';

const Account = (props) => {
  return (
    <>
      <div className="account">
        <SignIn />
      </div>
    </>
  );
};

export default Account;
