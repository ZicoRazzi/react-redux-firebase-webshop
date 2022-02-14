import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { auth, handleUserProfile } from './firebase/utils';
import { setCurrentUser } from './redux/user/user.action';
// import { useDispatch } from 'react-redux';
import { connect } from 'react-redux';

import './default.scss';

//hoc
import WithAuth from './hoc/WithAuth';

//pages
import Homepage from './pages/Homepage/Homepage';
import Registration from './pages/Registration/Registration';
import Account from './pages/Account/Account';
import Recovery from './pages/Recovery/Recovery';
import Dashboard from './pages/Dashboard/Dashboard';

//layouts
import MainLayout from './layouts/MainLayout';

const App = (props) => {
  const { setCurrentUser, currrentUser } = props;
  // const dispatch = useDispatch();

  useEffect(() => {
    const authListener = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await handleUserProfile(userAuth);
        userRef.onSnapshot((snapshot) => {
          // dispatch(
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data(),
          });
          // );
        });
      }
      setCurrentUser(userAuth);
    });
    return () => {
      authListener();
    };
  }, []);

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
            // currentUser ? (
            //   <MainLayout>
            //     <Homepage />
            //   </MainLayout>
            // ) : (
            <MainLayout>
              <Registration />
            </MainLayout>
            // )
          }
        />
        <Route
          path="/account"
          element={
            // currentUser ? (
            //   <MainLayout>
            //     <Homepage />
            //   </MainLayout>
            // ) : (
            <MainLayout>
              <Account />
            </MainLayout>
            // )
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
        <Route
          path="/dashboard"
          element={
            <WithAuth>
              <MainLayout>
                <Dashboard />
              </MainLayout>
            </WithAuth>
          }
        />
      </Routes>
    </div>
  );
};

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
// export default App;
