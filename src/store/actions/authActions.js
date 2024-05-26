import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchApi } from '../../services/api';

export const login = createAsyncThunk('auth/login', async (userCredentials) => {
  const response = await fetchApi('/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userCredentials),
  });
  const data = await response;
  
  const token = await response.token;
  console.log("tokennya ni", token)
  localStorage.setItem('token', data.token);
  return data.token;
});

export const register = createAsyncThunk('auth/register', async (userData) => {
  const response = await fetchApi('/auth/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  });
  const data = await response;
  
  return data;
});

export const fetchProfile = createAsyncThunk('auth/fetchProfile', async () => {
  const token = localStorage.getItem('token');
  const response = await fetchApi('/auth/profile', {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });
  if (!response) {
    const error = await response;
    console.error('Fetch user profile failed:', error);
    throw new Error(error);
  } else {
    const data = await response;
    return data;
  }
});
