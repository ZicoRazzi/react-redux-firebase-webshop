import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchProductsStart } from './../../redux/products/products.action';
import FormSelect from './../forms/form_select/FormSelect';
import Product from './Product';

import './styles.scss';

const mapState = ({ productsData }) => ({
  products: productsData.products,
});

const ProductResults = ({}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { filterType } = useParams();
  const { products } = useSelector(mapState);

  useEffect(() => {
    dispatch(fetchProductsStart({ filterType }));
  }, [filterType]);

  const handleFilter = (e) => {
    const nextFilter = e.target.value;
    navigate(`/search/${nextFilter}`);
  };

  if (!Array.isArray(products)) return null;

  if (products.length < 1) {
    return (
      <div className="products">
        <p>No search results</p>
      </div>
    );
  }

  const configFilters = {
    defaultValue: filterType,
    options: [
      {
        name: 'Show all',
        value: '',
      },
      {
        name: 'Beanies',
        value: 'beanies',
      },
      {
        name: 'Scarves',
        value: 'scarves',
      },
      {
        name: 'Gloves',
        value: 'gloves',
      },
      {
        name: 'Sweaters',
        value: 'sweaters',
      },
    ],
    handleChange: handleFilter,
  };

  return (
    <div className="products">
      <FormSelect {...configFilters} />

      {products.map((product, pos) => {
        const {
          productCategory,
          productThumbnail,
          productName,
          productDesc,
          productPrice,
        } = product;
        if (
          !productThumbnail ||
          !productName ||
          !productDesc ||
          typeof productPrice === 'undefined'
        )
          return null;

        //if (filter && productCategory !== filter) {
        //  console.log(filter)
        //  console.log("test")
        //}

        const configProduct = {
          productThumbnail,
          productName,
          productDesc,
          productPrice,
        };

        return <Product {...configProduct} />;
      })}
    </div>
  );
};

export default ProductResults;
