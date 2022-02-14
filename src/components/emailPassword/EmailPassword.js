import React, { useState } from 'react';
import { WithRouter } from '../withRouter/WithRouter';
import './style.scss';

import AuthWrapper from '../authWrapper/AuthWrapper';
import FormInput from '../forms/form_input/FormInput';
import Button from '../forms/Button/Button';

import { auth } from '../../firebase/utils';

const EmailPassword = (props) => {
  const [email, setEmail] = useState();
  const [errors, setErrors] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const config = {
        url: 'http://localhost:3000/account',
      };

      await auth
        .sendPasswordResetEmail(email, config)
        .then(() => {
          console.log('password reset');
          props.navigate('/account');
        })
        .catch(() => {
          console.log('something went wrong');
          const err = ['Email not found. Please try again'];
          setErrors(err);
        });
    } catch (err) {
      //console.log(err)
    }
  };

  const configAuthWrapper = {
    headline: 'Email Password',
  };
  return (
    <AuthWrapper {...configAuthWrapper}>
      <div className="formWrap">
        {errors.length > 0 && (
          <ul>
            {errors.map((error, index) => {
              return <li key={index}>{error}</li>;
            })}
          </ul>
        )}
        <form onSubmit={handleSubmit}>
          <FormInput
            type="email"
            name="email"
            value={email}
            placeholder="Email"
            handleChange={(e) => setEmail(e.target.value)}
          />
          <Button type="submit">Email Password</Button>
        </form>
      </div>
    </AuthWrapper>
  );
};

export default WithRouter(EmailPassword);
