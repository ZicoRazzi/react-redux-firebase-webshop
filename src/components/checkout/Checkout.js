import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  selectCartItems,
  selectCartTotal,
} from './../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';

import './styles.scss';
import Button from './../forms/Button/Button';
import Item from './item/Item';

const mapState = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

const Checkout = ({}) => {
  const navigate = useNavigate();
  const { cartItems, total } = useSelector(mapState);

  const errMsg = 'You have no items in your cart.';

  return (
    <div className="checkout">
      <h1>Checkout</h1>
      <div className="cart">
        {cartItems.length > 0 ? (
          <>
            <div className="items">
              {cartItems.map((item, pos) => {
                return (
                  <ul key={pos}>
                    <li>
                      <Item {...item} />
                    </li>
                  </ul>
                );
              })}

              <h3 className="total-price">Total: &euro;{total}</h3>
              <div className="cart-buttons">
                <Button onClick={() => navigate(-1)}>Continue Shopping</Button>

                <Button>Checkout</Button>
              </div>
            </div>
          </>
        ) : (
          <p className="no-items-msg">{errMsg}</p>
        )}
      </div>
    </div>
  );
};

export default Checkout;
