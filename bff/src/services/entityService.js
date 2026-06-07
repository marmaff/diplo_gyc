const axios = require('axios');

const BACKEND_URL = process.env.BACKEND_URL || 'http://localhost:8080';

const getProducts = async () => {
  const response = await axios.get(`${BACKEND_URL}/api/products`);
  return response.data;
};

const createProduct = async (payload) => {
  const response = await axios.post(`${BACKEND_URL}/api/products`, payload);
  return response.data;
};

module.exports = {
  getProducts,
  createProduct,
};
