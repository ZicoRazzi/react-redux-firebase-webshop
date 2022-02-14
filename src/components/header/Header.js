import React from 'react';
import { connect } from 'react-redux';
import './styles.scss';
import { Link } from 'react-router-dom';
import { auth } from './../../firebase/utils';

const Header = (props) => {
  const { currentUser } = props;
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
                <span
                  onClick={() => {
                    auth.signOut();
                  }}
                >
                  LogOut
                </span>
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

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});

export default connect(mapStateToProps, null)(Header);
