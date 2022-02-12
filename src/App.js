import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import { auth, handleUserProfile } from './firebase/utils';
import { setCurrentUser } from './redux/user/user.action';
import { connect } from 'react-redux';

import './default.scss';

//pages
import Homepage from './pages/Homepage/Homepage';
import Registration from './pages/Registration/Registration';
import Account from './pages/Account/Account';
import Recovery from './pages/Recovery/Recovery';

//layouts
import MainLayout from './layouts/MainLayout';

class App extends Component {
  authListener = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.authListener = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await handleUserProfile(userAuth);
        userRef.onSnapshot((snapshot) => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data(),
          });
        });
      }
      setCurrentUser(userAuth);
    });
  }
  componentWillUnmount() {
    this.authListener();
  }

  render() {
    const { currentUser } = this.props;

    return (
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <MainLayout>
                <Homepage />
              </MainLayout>
            }
          />
          <Route
            path="/registration"
            element={
              currentUser ? (
                <MainLayout>
                  <Homepage />
                </MainLayout>
              ) : (
                <MainLayout>
                  <Registration />
                </MainLayout>
              )
            }
          />
          <Route
            path="/account"
            element={
              currentUser ? (
                <MainLayout>
                  <Homepage />
                </MainLayout>
              ) : (
                <MainLayout>
                  <Account />
                </MainLayout>
              )
            }
          />
          <Route
            path="/recovery"
            element={
              <MainLayout>
                <Recovery />
              </MainLayout>
            }
          />
        </Routes>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
