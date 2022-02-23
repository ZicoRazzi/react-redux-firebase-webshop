import React from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from './../../redux/cart/cart.action';
import { Link, useNavigate } from 'react-router-dom';
import Button from './../forms/Button/Button';

const Product = (product) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { documentID, productThumbnail, productName, productPrice } = product;
  if (
    !documentID ||
    !productThumbnail ||
    !productName ||
    typeof productPrice === 'undefined'
  )
    return null;

  const configAddToCartBtn = {
    type: 'button',
  };

  const handleAddToCart = (product) => {
    if (!product) return;
    dispatch(addProduct(product));
    navigate('/cart');
  };

  return (
    <div className="product">
      <div className="thumb">
        <Link to={`/product/${documentID}`}>
          <img src={productThumbnail} alt={productName} />
        </Link>
      </div>

      <div className="details">
        <ul>
          <li>
            <Link to={`/product/${documentID}`}>
              <p className="product-name">{productName}</p>
            </Link>
          </li>
          <li>
            <span className="product-price">&euro;{productPrice}</span>
          </li>
          <li>
            <div className="add-to-cart-btn">
              <Button
                {...configAddToCartBtn}
                onClick={() => handleAddToCart(product)}
              >
                Add to cart
              </Button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Product;
