import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from './../forms/Button/Button';
import './style.scss';
import { signInWithGoogle, auth } from '../../firebase/utils';
import { FcGoogle } from 'react-icons/fc';

import FormInput from '../forms/form_input/FormInput';
import AuthWrapper from '../authWrapper/AuthWrapper';

const initialState = {
  email: '',
  password: '',
};

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...initialState,
    };

    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({
        ...initialState,
      });
    } catch (err) {
      //console.log(err)
    }
  };
  render() {
    const { email, password } = this.state;

    const configAuthWrapper = {
      headline: 'Login',
    };
    return (
      <AuthWrapper {...configAuthWrapper}>
        <div className="formWrap">
          <form onSubmit={this.handleSubmit}>
            <FormInput
              type="email"
              name="email"
              value={email}
              placeholder="Email"
              handleChange={this.handleChange}
            />
            <FormInput
              type="password"
              name="password"
              value={password}
              placeholder="Password"
              handleChange={this.handleChange}
            />
            <Button type="submit">LogIn</Button>
            <div className="socialSignin">
              <div className="row">
                <Button onClick={signInWithGoogle} className="btn">
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
  }
}

export default SignIn;
