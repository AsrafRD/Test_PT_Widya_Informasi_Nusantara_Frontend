import React from 'react';
import useAuth from '../auth/userAuth';
import ProductList from '../components/ProductList';
import ProductForm from '../components/ProductForm';

const Products = () => {
  const { user, authRedirect } = useAuth();

  if (!user) {
    return null;
  }
  return (
    <div>
      {authRedirect()}
      <h2>Products</h2>
      <ProductForm />
      <ProductList />
    </div>
  );
};

export default Products;