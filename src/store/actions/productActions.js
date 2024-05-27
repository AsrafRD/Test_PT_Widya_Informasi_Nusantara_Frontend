import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchApi } from '../../services/api';

export const fetchProducts = createAsyncThunk('product/fetchProducts', async () => {
  const token = localStorage.getItem('token');
  return fetchApi('/products', token);
});

export const createProduct = createAsyncThunk('product/createProduct', async (productData) => {
  const token = localStorage.getItem('token');
  return await fetchApi('/products', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(productData),
  });
});

export const updateProduct = createAsyncThunk('product/updateProduct', async ({ id, updatedProduct  }) => {
  const token = localStorage.getItem('token');
  return await fetchApi(`/products/${id}`, {
    method: 'PUT',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updatedProduct ),
  });
});

export const deleteProduct = createAsyncThunk('product/deleteProduct', async (id) => {
  const token = localStorage.getItem('token');
  return await fetchApi(`/products/${id}`, {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });
});

// export const deleteProduct = createAsyncThunk('products/deleteProduct', async (id) => {
//   await fetchApi(`/products/${id}`, { method: 'DELETE' });
//   return id;
// });
