const express = require('express');
const { addProduct, getProducts } = require('../controllers/productController');
const router = express.Router();

// Define the routes
router.post('/products', addProduct); // Route to add a product
router.get('/products', getProducts); // Route to get all products

module.exports = router;
