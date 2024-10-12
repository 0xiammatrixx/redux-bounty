import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const ViewDetails = () => {
  const { id } = useParams();
  const product = useSelector((state) => 
    state.products.products.find(p => p.id === Number(id))
  );

  if (!product) {
    return <p className="text-center text-red-600 font-semibold text-lg">Product not found.</p>;
  }

  return (
    <div className="max-w-2xl mx-auto p-8 bg-gradient-to-br from-gray-50 to-white rounded-lg shadow-lg border border-gray-200">
      <h2 className="text-4xl font-bold text-gray-900 mb-4">{product.name}</h2>
      <p className="text-xl text-gray-700 mb-2">Price: <span className="font-semibold text-indigo-600">${product.price.toFixed(2)}</span></p>
      <p className="text-xl text-gray-700 mb-4">Quantity: <span className="font-semibold text-green-600">{product.quantity} left in Stock</span></p>
      <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-2">Seller Information:</h3>
      <p className="text-lg text-gray-600">Shop: <span className="font-semibold text-gray-800">{product.sellerName}</span></p>
      <p className="text-lg text-gray-600">Contact Info: <span className="font-semibold text-gray-800">{product.sellerContact}</span></p>
    </div>
  );
};

export default ViewDetails;
