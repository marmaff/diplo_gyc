const { Router } = require('express');
const { addProduct, listProducts } = require('../controllers/entityController');

const router = Router();

router.get('/api/products', listProducts);
router.post('/api/products', addProduct);

module.exports = router;
