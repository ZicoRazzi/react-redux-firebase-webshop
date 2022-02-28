import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { signOutUserStart } from '../../redux/user/user.action';
import { selectCartItemsCount } from './../../redux/cart/cart.selectors';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FaTimes, FaBars } from 'react-icons/fa';

import './styles.scss';

const mapState = (state) => ({
  currentUser: state.user.currentUser,
  totalNumCartItems: selectCartItemsCount(state),
});

const Navigation = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentUser, totalNumCartItems } = useSelector(mapState);
  const [isMobile, setIsMobile] = useState(false);

  const signOut = () => {
    navigate('/');
    dispatch(signOutUserStart());
  };

  return (
    <>
      <div className={isMobile ? 'nav_menu-mobile' : 'nav_menu'}>
        <ul onClick={() => setIsMobile(false)}>
          {currentUser && [
            <li className="nav_menu-list">
              <Link className="nav_menu-link" to="/beanies">
                Beanies
              </Link>
            </li>,

            <li className="nav_menu-list">
              <Link className="nav_menu-link" to="/gloves">
                Gloves
              </Link>
            </li>,
            <li className="nav_menu-list">
              <Link className="nav_menu-link" to="/scarves">
                Scarves
              </Link>
            </li>,
            <li className="nav_menu-list">
              <Link className="nav_menu-link" to="/ourworld">
                Our World
              </Link>
            </li>,
            <li className="nav_menu-list">
              <Link className="nav_menu-link" to="/search">
                Search
              </Link>
            </li>,
            <li className="nav_menu-list">
              <Link className="nav_menu-link" to="/dashboard">
                My account
              </Link>
            </li>,
            <li className="nav_menu-list">
              <Link className="nav_menu-link" to="/cart">
                Cart ({totalNumCartItems})
              </Link>
            </li>,

            <li className="nav_menu-list">
              <span className="nav_menu-link" onClick={() => signOut()}>
                LogOut
              </span>
            </li>,
          ]}
          {!currentUser && [
            <li className="nav_menu-list">
              <Link className="nav_menu-link" to="/beanies">
                Beanies
              </Link>
            </li>,

            <li className="nav_menu-list">
              <Link className="nav_menu-link" to="/gloves">
                Gloves
              </Link>
            </li>,
            <li className="nav_menu-list">
              <Link className="nav_menu-link" to="/scarves">
                Scarves
              </Link>
            </li>,
            <li className="nav_menu-list">
              <Link className="nav_menu-link" to="/ourworld">
                Our World
              </Link>
            </li>,
            // <li className="nav_menu-list">
            //   <Link className="nav_menu-link" to="/registration">
            //     Registration
            //   </Link>
            // </li>,
            <li className="nav_menu-list">
              <Link className="nav_menu-link" to="/account">
                Account
              </Link>
            </li>,
            <li className="nav_menu-list">
              <Link className="nav_menu-link" to="/cart">
                Cart ({totalNumCartItems})
              </Link>
            </li>,
          ]}
        </ul>
      </div>
      <div className="hamburger">
        {isMobile ? (
          <FaTimes onClick={() => setIsMobile(false)} />
        ) : (
          <FaBars onClick={() => setIsMobile(true)} />
        )}
      </div>
    </>
  );
};

export default Navigation;
