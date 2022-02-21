import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { signOutUserStart } from '../../redux/user/user.action';
import { selectCartItemsCount } from './../../redux/cart/cart.selectors';
import './styles.scss';
import { Link } from 'react-router-dom';

const mapState = (state) => ({
  currentUser: state.user.currentUser,
  totalNumCartItems: selectCartItemsCount(state),
});
// const mapState = ({ user }) => ({
//   currentUser: user.currentUser,
// });

// const calcCartQuantity = (cartItems) => {
//   let totalAmount = 0;
//   cartItems.forEach(item => {
//     totalAmount += item.quantity
//   })
//   return totalAmount
// }

const Header = (props) => {
  const dispatch = useDispatch();
  const { currentUser, totalNumCartItems } = useSelector(mapState);

  // const cart = useSelector(state => state.cartData.cartItems)
  // console.log(calcCartQuantity(cart))

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
          <ul>
            {currentUser && [
              <li className="nav_menu-list">
                <Link className="nav_menu-link" to="/beanies">
                  Beanies
                </Link>
              </li>,

              <li className="nav_menu-list">
                <Link className="nav_menu-link" to="/">
                  Gloves
                </Link>
              </li>,
              <li className="nav_menu-list">
                <Link className="nav_menu-link" to="/">
                  Scarves
                </Link>
              </li>,
              <li className="nav_menu-list">
                <Link className="nav_menu-link" to="/">
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
                <Link className="nav_menu-link" to="/">
                  Gloves
                </Link>
              </li>,
              <li className="nav_menu-list">
                <Link className="nav_menu-link" to="/">
                  Scarves
                </Link>
              </li>,
              <li className="nav_menu-list">
                <Link className="nav_menu-link" to="/">
                  Our World
                </Link>
              </li>,
              <li className="nav_menu-list">
                <Link className="nav_menu-link" to="/registration">
                  Registration
                </Link>
              </li>,
              <li className="nav_menu-list">
                <Link className="nav_menu-link" to="/account">
                  Account
                </Link>
              </li>,
            ]}
            <li className="nav_menu-list">
              <Link className="nav_menu-link" to="/cart">
                {/* Cart ({calcCartQuantity(cart)}) */}
                Cart ({totalNumCartItems})
              </Link>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
};

Header.defaultProps = {
  currentUser: null,
};

export default Header;
