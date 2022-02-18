import React from 'react';
import Button from './../forms/Button/Button';

const Product = ({
  productThumbnail,
  productName,
  productDesc,
  productPrice,
}) => {
  if (
    !productThumbnail ||
    !productName ||
    !productDesc ||
    typeof productPrice === 'undefined'
  )
    return null;

  const configAddToCartBtn = {
    type: 'button',
  };
  return (
    <div className="product">
      <div className="thumb">
        <img src={productThumbnail} alt={productName} />
      </div>

      <div className="details">
        <ul>
          <li>
            <p className="product-name">{productName}</p>
          </li>
          <li>
            <p className="product-desc">{productDesc}</p>
          </li>
          <li>
            <span className="product-price">&euro;{productPrice}</span>
          </li>
          <li>
            <div className="add-to-cart">
              <Button {...configAddToCartBtn}>Add to cart</Button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Product;
