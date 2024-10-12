// src/components/ProductList.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../features/cartSlice'; // Make sure to import from the correct slice

const ProductList = () => {
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    if (product.quantity > 0) {
      dispatch(addToCart({
        id: product.id,
        name: product.name, // Include name
        price: product.price, // Include price
        quantity: 1 // Assuming you add 1 item per click
      })); 
    } else {
      alert('This product is out of stock');
    }
  };

  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <span>{product.name} - ${product.price} (Qty: {product.quantity})</span>
          <button onClick={() => handleAddToCart(product)} disabled={product.quantity === 0}>
            {product.quantity > 0 ? 'Add to Cart' : 'Out of Stock'}
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
