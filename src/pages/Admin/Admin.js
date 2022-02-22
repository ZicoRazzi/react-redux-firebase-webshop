import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addProductStart,
  fetchProductsStart,
  deleteProductStart,
} from '../../redux/products/products.action';
import Modal from './../../components/modal/Modal';
import FormInput from './../../components/forms/form_input/FormInput';
import FormSelect from './../../components/forms/form_select/FormSelect';
import Button from './../../components/forms/Button/Button';
import LoadMore from '../../components/loadMore/LoadMore';
import { CKEditor } from 'ckeditor4-react';
import './styles.scss';

const mapState = ({ productsData }) => ({
  products: productsData.products,
});

const Admin = (props) => {
  const { products } = useSelector(mapState);
  const dispatch = useDispatch();
  const [hideModal, setHideModal] = useState(true);
  const [productCategory, setProductCategory] = useState('');
  const [productName, setProductName] = useState('');
  const [productThumbnail, setProductThumbnail] = useState('');
  const [productDesc, setProductDesc] = useState('');
  const [productPrice, setProductPrice] = useState(0);

  const { data, queryDoc, isLastPage } = products;

  useEffect(() => {
    dispatch(fetchProductsStart());
  }, []);

  const toggleModal = () => setHideModal(!hideModal);

  const configModal = {
    hideModal,
    toggleModal,
  };

  const resetForm = () => {
    setHideModal(true);
    setProductCategory('');
    setProductName('');
    setProductThumbnail('');
    setProductDesc('');
    setProductPrice(0);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      addProductStart({
        productCategory,
        productName,
        productThumbnail,
        productDesc,
        productPrice,
      })
    );
    resetForm();
  };

  const handleLoadMore = () => {
    dispatch(
      fetchProductsStart({
        startAfterDoc: queryDoc,
        persistProducts: data,
      })
    );
  };

  const configLoadMore = {
    onLoadMoreEvt: handleLoadMore,
  };

  return (
    <div className="admin">
      <div className="callToActions">
        <ul>
          <li>
            <Button onClick={() => toggleModal()}>Add new product</Button>
          </li>
        </ul>
      </div>

      <Modal {...configModal}>
        <div className="addNewProductForm">
          <form onSubmit={handleSubmit}>
            <h2>Add new product</h2>

            <FormSelect
              label="Category"
              options={[
                {
                  value: 'beanies',
                  name: 'Beanies',
                },
                {
                  value: 'sweaters',
                  name: 'Sweaters',
                },
                {
                  value: 'gloves',
                  name: 'Gloves',
                },
                {
                  value: 'scarves',
                  name: 'Scarves',
                },
              ]}
              handleChange={(e) => setProductCategory(e.target.value)}
            />

            <FormInput
              label="Name"
              type="text"
              value={productName}
              handleChange={(e) => setProductName(e.target.value)}
            />

            <FormInput
              label="Main image URL"
              type="url"
              value={productThumbnail}
              handleChange={(e) => setProductThumbnail(e.target.value)}
            />

            <FormInput
              label="Price"
              type="number"
              min="0.00"
              max="10000.00"
              step="0.01"
              value={productPrice}
              handleChange={(e) => setProductPrice(e.target.value)}
            />
            <CKEditor onChange={(e) => setProductDesc(e.editor.getData())} />

            <br />

            <Button type="submit">Add product</Button>
          </form>
        </div>
      </Modal>
      <div className="manageProducts">
        <h1>Manage Products</h1>
        <div className="product-content">
          {Array.isArray(data) &&
            data.length > 0 &&
            data.map((product, index) => {
              const {
                productName,
                productThumbnail,
                productPrice,
                documentID,
              } = product;

              return (
                <div className="product-container">
                  <div className="product-image">
                    <img src={productThumbnail} alt="product-image" />
                  </div>
                  <span className="product-name">{productName}</span>
                  <span className="product-price">&euro;{productPrice}</span>
                  <div className="delete-btn">
                    <Button
                      onClick={() => dispatch(deleteProductStart(documentID))}
                    >
                      Delete
                    </Button>
                  </div>
                </div>
              );
            })}
        </div>

        <div> {!isLastPage && <LoadMore {...configLoadMore} />}</div>
      </div>
    </div>
  );
};

export default Admin;
