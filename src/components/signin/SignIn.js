import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import { WithRouter } from './../withRouter/WithRouter';
import { useDispatch, useSelector } from 'react-redux';
import {
  emailSignInStart,
  googleSignInStart,
} from '../../redux/user/user.action';

import Button from './../forms/Button/Button';
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
          <Button type="submit">LogIn</Button>
          <div className="socialSignin">
            <div className="row">
              <Button onClick={handleGoogleSignIn} className="btn">
                <FcGoogle className="google_icon" /> Google
              </Button>
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

// export default WithRouter(SignIn);
export default SignIn;
