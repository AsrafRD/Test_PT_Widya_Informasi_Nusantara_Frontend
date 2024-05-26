// services/api.js
export const apiUrl = 'http://localhost:5000';

export const fetchApi = async (url, options = {}) => {
  const token = localStorage.getItem('token'); 
  const headers = {
    'Content-Type': 'application/json',
    ...options.headers,
    'Authorization': `Bearer ${token}`,
  };

  const response = await fetch(`${apiUrl}${url}`, {
    ...options,
    headers,
  });

  if (!response) {
    if (response.status === 401) {
      // Jika status 401, redirect ke login
      window.location.href = '/login';
    }
    throw new Error('Network response was not ok' + response.statusText);
  }

  return response.json();
};
