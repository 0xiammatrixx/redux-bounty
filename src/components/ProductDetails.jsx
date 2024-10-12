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
    return <p>Product not found!</p>;
  }

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-4">{product.name}</h2>
      <p className="text-lg mb-2">Price: ${product.price.toFixed(2)}</p>
      <p className="mb-4">{product.description}</p>
      <p className="text-gray-600">Seller: {product.sellerName}</p>
      <p className="text-gray-600">Contact: {product.sellerContact}</p>
    </div>
  );
};

export default ProductDetails;
