import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchProductsStart } from './../../redux/products/products.action';
import FormSelect from './../forms/form_select/FormSelect';
import LoadMore from '../loadMore/LoadMore';
import Product from './Product';

import './styles.scss';
import BannerImageB from './../../assets/images/beanie-campaign.webp';
import BannerImageG from './../../assets/images/banner-gloves-fingerless.webp';
import BannerImageS from './../../assets/images/lebonnet_scarf_campaign.webp';
import BannerImage from './../../assets/images/lebonnet_giftcard-banner.webp';

const mapState = ({ productsData }) => ({
  products: productsData.products,
});

const ProductResults = ({
  filterType,
  displayFilter = true,
  bannerImage = true,
  bannerImageB = true,
  bannerImageG = true,
  bannerImageS = true,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
      {!bannerImageB && (
        <div
          className="banner-image"
          style={{
            backgroundImage: `url(${BannerImageB})`,
          }}
        ></div>
      )}
      {!bannerImageG && (
        <div
          className="banner-image"
          style={{
            backgroundImage: `url(${BannerImageG})`,
          }}
        ></div>
      )}
      {!bannerImageS && (
        <div
          className="banner-image"
          style={{
            backgroundImage: `url(${BannerImageS})`,
          }}
        ></div>
      )}

      {!bannerImage && (
        <div
          className="banner-image"
          style={{
            backgroundImage: `url(${BannerImage})`,
          }}
        ></div>
      )}

      {!displayFilter && <FormSelect {...configFilters} />}

      <div className="product-results">
        {data.map((product, pos) => {
          const { productThumbnail, productName, productDesc, productPrice } =
            product;
          if (
            !productThumbnail ||
            !productName ||
            !productDesc ||
            typeof productPrice === 'undefined'
          )
            return null;

          const configProduct = {
            ...product,
          };

          return <Product {...configProduct} />;
        })}
      </div>
      <div className="load-more-btn">
        {!isLastPage && <LoadMore {...configLoadMore} />}
      </div>
    </div>
  );
};

export default ProductResults;
