import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchProductStart,
  setProduct,
} from '../../redux/products/products.action';
import Button from '../forms/Button/Button';

import './styles.scss';

const mapState = (state) => ({
  product: state.productsData.product,
});

const ProductCard = ({}) => {
  const { productID } = useParams();
  const { product } = useSelector(mapState);
  const dispatch = useDispatch();

  const { productThumbnail, productName, productPrice, productDesc } = product;

  useEffect(() => {
    dispatch(fetchProductStart(productID));

    return () => {
      dispatch(setProduct({}));
    };
  }, []);

  const configAddYoCartBtn = {
    type: 'button',
  };

  return (
    <div className="product-card">
      <div className="hero">
        <img src={productThumbnail} />
      </div>
      <div className="product-details">
        <ul>
          <li>
            <div className="product-name">
              <h1>{productName}</h1>
            </div>
          </li>
          <li>
            <div className="product-price">
              <span>&euro;{productPrice}</span>
            </div>
          </li>

          <li>
            <span
              className="product-desc"
              dangerouslySetInnerHTML={{ __html: productDesc }}
            />
          </li>
          <li>
            <div className="add-to-cart">
              <Button {...configAddYoCartBtn}>Add to cart</Button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProductCard;
