// store/actions/productActions.js
import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchApi } from '../../services/api';

export const fetchProducts = createAsyncThunk('product/fetchProducts', async () => {
  return fetchApi('/products');
});

export const createProduct = createAsyncThunk('product/createProduct', async (productData) => {
  return fetchApi('/products', {
    method: 'POST',
    body: JSON.stringify(productData),
  });
});

export const updateProduct = createAsyncThunk('product/updateProduct', async ({ id, productData }) => {
  return fetchApi(`/products/${id}`, {
    method: 'PUT',
    body: JSON.stringify(productData),
  });
});

export const deleteProduct = createAsyncThunk('product/deleteProduct', async (id) => {
  return fetchApi(`/products/${id}`, {
    method: 'DELETE',
  });
});
