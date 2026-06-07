const { createProduct, getProducts } = require('../services/entityService');

const listProducts = async (_req, res) => {
  try {
    const products = await getProducts();
    res.json(products);
  } catch {
    res.status(500).json({ message: 'Internal server error' });
  }
};

const addProduct = async (req, res) => {
  try {
    const created = await createProduct(req.body);
    res.status(201).json(created);
  } catch {
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = {
  listProducts,
  addProduct,
};
