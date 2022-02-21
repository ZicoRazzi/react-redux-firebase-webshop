import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchProductsStart } from './../../redux/products/products.action';
import FormSelect from './../forms/form_select/FormSelect';
import LoadMore from '../loadMore/LoadMore';
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

  const { data, queryDoc, isLastPage } = products;

  useEffect(() => {
    dispatch(fetchProductsStart({ filterType }));
  }, [filterType]);

  const handleFilter = (e) => {
    const nextFilter = e.target.value;
    navigate(`/search/${nextFilter}`);
  };

  if (!Array.isArray(data)) return null;

  if (data.length < 1) {
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

  const handleLoadMore = () => {
    dispatch(
      fetchProductsStart({
        filterType,
        startAfterDoc: queryDoc,
        persistProducts: data,
      })
    );
  };

  const configLoadMore = {
    onLoadMoreEvt: handleLoadMore,
  };

  return (
    <div className="products">
      <FormSelect {...configFilters} />

      <div className="product-results">
        {data.map((product, pos) => {
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
            ...product,
          };

          return <Product {...configProduct} />;
        })}
      </div>

      {!isLastPage && <LoadMore {...configLoadMore} />}
    </div>
  );
};

export default ProductResults;
