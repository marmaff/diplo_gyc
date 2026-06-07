import axios from 'axios';

const BASE_URL = 'http://localhost:3000';

export const getProducts = async () => {
  const response = await axios.get(`${BASE_URL}/api/products`);
  return response.data;
};

export const createProduct = async (payload) => {
  const response = await axios.post(`${BASE_URL}/api/products`, payload);
  return response.data;
};

export const getHealth = async () => {
  const response = await axios.get(`${BASE_URL}/health`);
  return response.data;
};
