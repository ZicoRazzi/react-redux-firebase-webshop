import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { signOutUserStart } from '../../redux/user/user.action';
import './styles.scss';
import { Link } from 'react-router-dom';

const mapState = ({ user }) => ({
  currentUser: user.currentUser,
});

const Header = (props) => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector(mapState);

  const signOut = () => {
    dispatch(signOutUserStart());
  };

  return (
    <div>
      <header className="header">
        <div className="logo">
          <Link className="logo-link" to="/">
            Le Bonnet
          </Link>
        </div>
        <div className="nav_menu">
          {currentUser && (
            <ul>
              <li className="nav_menu-list">
                <Link className="nav_menu-link" to="/">
                  Beanies
                </Link>
              </li>
              <li className="nav_menu-list">
                <Link className="nav_menu-link" to="/">
                  Sweaters
                </Link>
              </li>
              <li className="nav_menu-list">
                <Link className="nav_menu-link" to="/">
                  Le Grand Bonnet
                </Link>
              </li>
              <li className="nav_menu-list">
                <Link className="nav_menu-link" to="/">
                  Gloves
                </Link>
              </li>
              <li className="nav_menu-list">
                <Link className="nav_menu-link" to="/">
                  Scarves
                </Link>
              </li>
              <li className="nav_menu-list">
                <Link className="nav_menu-link" to="/">
                  Gifts
                </Link>
              </li>
              <li className="nav_menu-list">
                <Link className="nav_menu-link" to="/">
                  Limited
                </Link>
              </li>
              <li className="nav_menu-list">
                <Link className="nav_menu-link" to="/">
                  Our World
                </Link>
              </li>
              <li className="nav_menu-list">
                <Link className="nav_menu-link" to="/dashboard">
                  My account
                </Link>
              </li>
              <li>
                <span onClick={() => signOut()}>LogOut</span>
              </li>
            </ul>
          )}
          {!currentUser && (
            <ul>
              <li className="nav_menu-list">
                <Link className="nav_menu-link" to="/">
                  Beanies
                </Link>
              </li>
              <li className="nav_menu-list">
                <Link className="nav_menu-link" to="/">
                  Sweaters
                </Link>
              </li>
              <li className="nav_menu-list">
                <Link className="nav_menu-link" to="/">
                  Le Grand Bonnet
                </Link>
              </li>
              <li className="nav_menu-list">
                <Link className="nav_menu-link" to="/">
                  Gloves
                </Link>
              </li>
              <li className="nav_menu-list">
                <Link className="nav_menu-link" to="/">
                  Scarves
                </Link>
              </li>
              <li className="nav_menu-list">
                <Link className="nav_menu-link" to="/">
                  Gifts
                </Link>
              </li>
              <li className="nav_menu-list">
                <Link className="nav_menu-link" to="/">
                  Limited
                </Link>
              </li>
              <li className="nav_menu-list">
                <Link className="nav_menu-link" to="/">
                  Our World
                </Link>
              </li>
              <li className="nav_menu-list">
                <Link className="nav_menu-link" to="/registration">
                  Registration
                </Link>
              </li>
              <li className="nav_menu-list">
                <Link className="nav_menu-link" to="/account">
                  Account
                </Link>
              </li>
              <li className="nav_menu-list">
                <Link className="nav_menu-link" to="/">
                  Cart (0)
                </Link>
              </li>
            </ul>
          )}
        </div>
      </header>
    </div>
  );
};

Header.defaultProps = {
  currentUser: null,
};

export default Header;
