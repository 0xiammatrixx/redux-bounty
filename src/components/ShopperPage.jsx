// src/components/ShopperPage.jsx
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'; 
import { addToCart } from '../features/cartSlice';
import { fetchProducts } from '../features/productSlice';

const ShopperPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const products = useSelector((state) => state.products.products);
  const currentUser = useSelector((state) => state.users.currentUser);
  const [notification, setNotification] = useState('');

  useEffect(() => {
    const fetchAndLogProducts = async () => {
      await dispatch(fetchProducts());
    };

    fetchAndLogProducts();
  }, [dispatch]);

  const handleAddToCart = (product) => {
    if (!currentUser) {
      alert('Please log in to add items to your cart.');
      return;
    }

    if (product.price && product.quantity > 0) {
      const quantityToAdd = 1; 
      dispatch(addToCart({
        id: product.id,
        name: product.name,
        price: parseFloat(product.price),
        quantity: quantityToAdd 
      }));

      console.log('Adding to cart:', {
        id: product.id,
        name: product.name,
        price: parseFloat(product.price),
        quantity: quantityToAdd 
      });

      setNotification(`Added ${quantityToAdd} of ${product.name} to cart!`);
      setTimeout(() => setNotification(''), 3000);
    } else {
      alert('This product is out of stock or has an invalid price!');
    }
  };

  const handleCheckout = () => {
    navigate('/cart'); 
  };

  return (
    <div className="shopper-container min-h-screen bg-gray-200 flex flex-col items-center p-6">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Available Products</h1>

      {notification && (
        <div className="notification bg-blue-200 text-blue-800 p-2 rounded-lg mb-4">
          {notification}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {products.map((product) => (
          <div key={product.id} className="border rounded-lg shadow-lg p-6 bg-white hover:shadow-xl transition duration-300">
            <h3 className="text-lg font-bold text-gray-800">{product.name}</h3>
            <p className="text-gray-600 mt-2">
              Price: <span className="font-bold">${typeof product.price === 'number' ? product.price.toFixed(2) : 'N/A'}</span>
            </p>
            <p className="text-gray-600">Seller: {product.sellerName}</p>
            <p className="text-gray-600">Contact: {product.sellerContact}</p>
            <button 
              onClick={() => handleAddToCart(product)} 
              className={`mt-4 text-white py-2 px-4 rounded-lg transition duration-300 ${
                product.quantity > 0 ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-400 cursor-not-allowed'
              }`}
              disabled={product.quantity <= 0}
            >
              {product.quantity > 0 ? 'Add to Cart' : 'Out of Stock'}
            </button>
          </div>
        ))}
      </div>

      <button 
        onClick={handleCheckout} 
        className="mt-10 bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-400 transition duration-300"

      >
        Checkout
      </button>
    </div>
  );
};

export default ShopperPage;
