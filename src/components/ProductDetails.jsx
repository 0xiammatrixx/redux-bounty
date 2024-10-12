// src/components/ProductDetails.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProductDetails = () => {
  const { id } = useParams();
  const product = useSelector((state) =>
    state.products.products.find((product) => product.id === parseInt(id))
  );

  if (!product) {
    return <p className="text-center text-red-500">Product not found!</p>;
  }

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-4xl font-bold text-gray-800 mb-4">{product.name}</h2>
      <p className="text-xl text-gray-800 mb-2">Price: <span className="font-semibold">${product.price.toFixed(2)}</span></p>
      <p className="text-gray-700 mb-4">{product.description}</p>
      <div className="border-t border-gray-300 pt-4">
        <p className="text-gray-600 mb-1">Shop: <span className="font-semibold">{product.sellerName}</span></p>
        <p className="text-gray-600">Contact Info: <span className="font-semibold">{product.sellerContact}</span></p>
      </div>
    </div>
  );
};

export default ProductDetails;

