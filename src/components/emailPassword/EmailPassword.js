import React, { Component } from 'react';
import { WithRouter } from '../withRouter/WithRouter';
import './style.scss';

import AuthWrapper from '../authWrapper/AuthWrapper';
import FormInput from '../forms/form_input/FormInput';
import Button from '../forms/Button/Button';

import { auth } from '../../firebase/utils';

const initialState = {
  email: '',
  errors: [],
};

class EmailPassword extends Component {
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

    try {
      const { email } = this.state;

      const config = {
        url: 'http://localhost:3000/account',
      };

      await auth
        .sendPasswordResetEmail(email, config)
        .then(() => {
          console.log('password reset');
          this.props.navigate('/account');
        })
        .catch(() => {
          console.log('something went wrong');
          const err = ['Email not found. Please try again'];
          this.setState({
            errors: err,
          });
        });
    } catch (err) {
      //console.log(err)
    }
  };
  render() {
    const { email, errors } = this.state;

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
          <form onSubmit={this.handleSubmit}>
            <FormInput
              type="email"
              name="email"
              value={email}
              placeholder="Email"
              onChange={this.handleChange}
            />
            <Button type="submit">Email Password</Button>
          </form>
        </div>
      </AuthWrapper>
    );
  }
}

export default WithRouter(EmailPassword);
