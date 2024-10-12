// src/components/AddProduct.jsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../features/productSlice';

const AddProduct = () => {
  const dispatch = useDispatch();
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [sellerName, setSellerName] = useState('');
  const [sellerContact, setSellerContact] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      id: Date.now(), // Generate a unique ID for the product
      name: productName,
      price: parseFloat(productPrice),
      description: productDescription,
      sellerName,
      sellerContact,
    };
    
    dispatch(addProduct(newProduct));

    // Clear the form
    setProductName('');
    setProductPrice('');
    setProductDescription('');
    setSellerName('');
    setSellerContact('');
  };

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-4">Add New Product</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Product Name"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          className="p-3 border border-gray-300 rounded-lg w-full"
          required
        />
        <input
          type="number"
          placeholder="Price"
          value={productPrice}
          onChange={(e) => setProductPrice(e.target.value)}
          className="p-3 border border-gray-300 rounded-lg w-full"
          required
        />
        <textarea
          placeholder="Description"
          value={productDescription}
          onChange={(e) => setProductDescription(e.target.value)}
          className="p-3 border border-gray-300 rounded-lg w-full"
          required
        />
        <input
          type="text"
          placeholder="Your Name"
          value={sellerName}
          onChange={(e) => setSellerName(e.target.value)}
          className="p-3 border border-gray-300 rounded-lg w-full"
          required
        />
        <input
          type="text"
          placeholder="Your Contact Info"
          value={sellerContact}
          onChange={(e) => setSellerContact(e.target.value)}
          className="p-3 border border-gray-300 rounded-lg w-full"
          required
        />
        <button
          type="submit"
          className="bg-primary text-white py-3 rounded-lg font-semibold w-full hover:bg-secondary transition duration-300"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
