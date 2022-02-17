import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signOutUserStart } from './../redux/user/user.action';

// import Header from './../components/header/Header';
import VerticalNav from './../components/verticalNav/VerticalNav';
import Footer from './../components/footer/Footer';
import './styles.scss';

const AdminLayout = (props) => {
  const dispatch = useDispatch();

  const signOut = () => {
    dispatch(signOutUserStart());
  };

  return (
    <>
      <div className="adminLayout">
        {/* <Header {...props} /> */}

        <div className="logo">
          <Link className="logo-link" to="/">
            Le Bonnet
          </Link>
        </div>
        <div className="controlPanel">
          <div className="sidebar">
            <VerticalNav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <span className="signOut" onClick={() => signOut()}>
                    Sign Out
                  </span>
                </li>
              </ul>
            </VerticalNav>
          </div>
          <div className="content">{props.children}</div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AdminLayout;
