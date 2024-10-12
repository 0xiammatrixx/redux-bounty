// src/components/Home.jsx
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import LogoutButton from './LogoutButton';
import { Link } from 'react-router-dom';
import { fetchProducts } from '../features/productSlice'; // Import your fetchProducts action

const Home = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.users.currentUser);
  const products = useSelector((state) => state.products.products); // Assuming products are in the state

  useEffect(() => {
    dispatch(fetchProducts()); // Fetch products on component mount
  }, [dispatch]);

  // Role-based rendering for button text and link
  const renderButton = () => {
    if (!currentUser) {
      // If the user is not logged in, show the Login button
      return (
        <Link to="/login" className="bg-orange-500 hover:bg-orange-400 text-white font-bold py-2 px-4 rounded">
          Login Now
        </Link>
      );
    }

    switch (currentUser.role) {
      case 'admin':
        return (
          <Link to="/admin" className="bg-orange-500 hover:bg-orange-400 text-white font-bold py-2 px-4 rounded">
            Manage Users Now
          </Link>
        );
      case 'seller':
        return (
          <Link to="/seller" className="bg-orange-500 hover:bg-orange-400 text-white font-bold py-2 px-4 rounded">
            Sell Now
          </Link>
        );
      case 'shopper':
      default:
        return (
          <Link to="/shopper" className="bg-orange-500 hover:bg-orange-400 text-white font-bold py-2 px-4 rounded">
            Shop Now
          </Link>
        );
    }
  };

  return (
    <div className="home-container min-h-screen bg-gray-light flex flex-col items-center">
      {/* Hero Section */}
      <div className="w-full h-screen bg-cover bg-center flex items-center justify-center text-center relative" style={{ backgroundImage: 'url("/path/to/your-image.jpg")' }}>
        <div className="absolute inset-0 bg-black opacity-50"></div> {/* Dark overlay */}
        <div className="relative z-10 text-white">
          <h1 className="text-5xl font-extrabold mb-4">Welcome to Our Marketplace</h1>
          <p className="text-xl font-light mb-8">Explore unique products with style</p>
          {renderButton()} {/* Render the button based on user role or login status */}
        </div>
      </div>
    </div>
  );
};

export default Home;
