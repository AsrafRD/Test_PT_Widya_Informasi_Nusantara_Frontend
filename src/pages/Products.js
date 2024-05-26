import React from 'react';
import ProductList from '../components/ProductList';
import ProductForm from '../components/ProductForm';

const Products = () => {
  return (
    <div>
      <h2>Products</h2>
      <ProductList />
      <ProductForm />
    </div>
  );
};

export default Products;
