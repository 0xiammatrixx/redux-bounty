// src/components/ShopperPage.jsx
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'; 
import { addToCart } from '../features/cartSlice';
import { fetchProducts } from '../features/productSlice'; // Import fetchProducts action

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
      // Dispatch action to add product to cart
      dispatch(addToCart({
        id: product.id,
        name: product.name,
        price: parseFloat(product.price), // Ensure price is a number
        quantity: quantityToAdd 
      }));

      // Log the product being added to the cart for debugging
      console.log('Adding to cart:', {
        id: product.id,
        name: product.name,
        price: parseFloat(product.price), // Ensure this is a number
        quantity: quantityToAdd 
      });

      setNotification(`Added ${quantityToAdd} of ${product.name} to cart!`);
      setTimeout(() => setNotification(''), 3000); // Clear notification after 3 seconds
    } else {
      alert('This product is out of stock or has an invalid price!');
    }
  };

  const handleCheckout = () => {
    navigate('/cart'); 
  };

  return (
    <div className="shopper-container min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-4xl font-bold text-primary mb-6">Available Products</h1>

      {notification && (
        <div className="notification bg-green-200 text-green-800 p-2 rounded-lg mb-4">
          {notification}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="border rounded-lg shadow-lg p-4 bg-white hover:shadow-xl transition duration-300">
            <h3 className="text-lg font-bold text-gray-800">{product.name}</h3>
            <p className="text-gray-600">
              Price: ${typeof product.price === 'number' ? product.price.toFixed(2) : 'N/A'}
            </p>
            <p className="text-gray-600">Seller: {product.sellerName}</p>
            <p className="text-gray-600">Contact: {product.sellerContact}</p>
            <button 
              onClick={() => handleAddToCart(product)} 
              className={`mt-4 text-white py-2 px-4 rounded-lg transition duration-300 ${
                product.quantity > 0 ? 'bg-primary hover:bg-secondary' : 'bg-gray-400 cursor-not-allowed'
              }`}
              disabled={product.quantity <= 0} // Disable button if out of stock
            >
              {product.quantity > 0 ? 'Add to Cart' : 'Out of Stock'}
            </button>
          </div>
        ))}
      </div>

      <button 
        onClick={handleCheckout} 
        className="mt-10 bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition duration-300"
      >
        Checkout
      </button>
    </div>
  );
};

export default ShopperPage;
