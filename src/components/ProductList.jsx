// src/components/ProductList.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../features/cartSlice'; // Ensure this is the correct import

const ProductList = () => {
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    if (product.quantity > 0) {
      dispatch(addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: 1,
      })); 
    } else {
      alert('This product is out of stock');
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {products.map((product) => (
        <div key={product.id} className="product-item">
          <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-t-lg" />
          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
            <p className="text-gray-600">${product.price.toFixed(2)}</p>
            <p className="text-gray-500">Quantity: {product.quantity}</p>
          </div>
          <div className="p-4 border-t">
            <button 
              onClick={() => handleAddToCart(product)} 
              className={`w-full py-2 rounded text-white ${product.quantity > 0 ? 'bg-[#172463] hover:bg-[#040723]' : 'bg-gray-400 cursor-not-allowed'}`} 
              disabled={product.quantity === 0}
            >
              {product.quantity > 0 ? 'Add to Cart' : 'Out of Stock'}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
