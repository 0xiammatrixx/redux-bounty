const Product = require('../models/Product');

// Add product
const addProduct = async (req, res) => {
  const { name, price, sellerName, sellerContact } = req.body;
  try {
    const product = new Product({ name, price, sellerName, sellerContact });
    await product.save();
    res.status(201).json({ message: 'Product added successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get products
const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { addProduct, getProducts };
