import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  emailSignInStart,
  googleSignInStart,
} from '../../redux/user/user.action';

import './style.scss';
import { FcGoogle } from 'react-icons/fc';

import FormInput from '../forms/form_input/FormInput';
import AuthWrapper from '../authWrapper/AuthWrapper';

const mapState = ({ user }) => ({
  currentUser: user.currentUser,
});

const SignIn = (props) => {
  const { currentUser } = useSelector(mapState);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (currentUser) {
      resetForm();
      navigate('/');
    }
  }, [currentUser]);

  const resetForm = () => {
    setEmail('');
    setPassword('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(emailSignInStart({ email, password }));
  };

  const handleGoogleSignIn = () => {
    dispatch(googleSignInStart());
  };

  const configAuthWrapper = {
    headline: 'Login',
  };
  return (
    <AuthWrapper {...configAuthWrapper}>
      <div className="formWrap">
        <form onSubmit={handleSubmit}>
          <FormInput
            type="email"
            name="email"
            value={email}
            placeholder="Email"
            handleChange={(e) => setEmail(e.target.value)}
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            placeholder="Password"
            handleChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="login-btn">
            LogIn
          </button>
          <div className="socialSignin">
            <div className="row">
              <button onClick={handleGoogleSignIn} className="login-btn">
                <FcGoogle className="google-icon" /> Google
              </button>
            </div>
          </div>

          <div className="links">
            <Link to="/recovery">Reset Password</Link>
          </div>
        </form>
      </div>
    </AuthWrapper>
  );
};

export default SignIn;
