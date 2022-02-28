import React from 'react';
import { useDispatch } from 'react-redux';
import {
  removeCartItem,
  addProduct,
  reduceCartItem,
} from './../../../redux/cart/cart.action';
import {
  TiDeleteOutline,
  TiChevronLeftOutline,
  TiChevronRightOutline,
} from 'react-icons/ti';

const Item = (product) => {
  const dispatch = useDispatch();
  const { productName, productThumbnail, productPrice, quantity, documentID } =
    product;

  const handleRemoveCartItem = (documentID) => {
    dispatch(
      removeCartItem({
        documentID,
      })
    );
  };

  const handleAddProduct = (product) => {
    dispatch(addProduct(product));
  };

  const handleReduceItem = (product) => {
    dispatch(reduceCartItem(product));
  };
  return (
    <div className="cartItem">
      <div className="product-image">
        <img src={productThumbnail} alt={productName} />
      </div>
      <div className="product-name">
        <span>{productName}</span>
      </div>
      <div className="quantities">
        <span className="cartBtn" onClick={() => handleReduceItem(product)}>
          <TiChevronLeftOutline />
        </span>
        <span className="product-quantity">{quantity}</span>
        <span className="cartBtn" onClick={() => handleAddProduct(product)}>
          <TiChevronRightOutline />
        </span>
      </div>
      <div className="product-price">
        <span>&euro;{productPrice}</span>
      </div>
      <div className="delete-button">
        <span
          className="cartBtn"
          onClick={() => handleRemoveCartItem(documentID)}
        >
          <TiDeleteOutline />
        </span>
      </div>
    </div>
  );
};

export default Item;
