const express = require('express');
const { getProducts, getProduct, createProduct, updateProduct, deleteProduct } = require('../controllers/products');
const { authenticateToken, isAdmin } = require('../middleware/auth');

const router = express.Router();

router.route('/').get(getProducts).post(authenticateToken, isAdmin, createProduct);

router.route('/:id').get(getProduct).put(authenticateToken, isAdmin, authenticateToken, updateProduct).delete(authenticateToken, isAdmin, authenticateToken, deleteProduct);

module.exports = router;