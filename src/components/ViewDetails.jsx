import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const ViewDetails = () => {
  const { id } = useParams();
  const product = useSelector((state) => state.products.products.find(p => p.id === Number(id)));

  if (!product) {
    return <p>Product not found.</p>;
  }

  return (
    <div className="view-details p-6">
      <h2 className="text-3xl font-bold mb-4">{product.name}</h2>
      <p className="text-lg">Price: ${product.price}</p>
      <p className="text-lg">Quantity: {product.quantity}</p>
      <h3 className="text-xl font-semibold mt-4">Seller Information:</h3>
      <p className="text-lg">Name: {product.sellerName}</p>
      <p className="text-lg">Contact: {product.sellerContact}</p>
    </div>
  );
};

export default ViewDetails;
