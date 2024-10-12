// src/components/Navbar.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'; // For React Router v6
import { logoutUser } from '../features/userSlice'; // Assuming you have a logout action
import { Link } from 'react-router-dom';

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentUser = useSelector((state) => state.users.currentUser);

  const handleLogoutUser = () => {
    dispatch(logoutUser());  // Dispatch logout action
    navigate('/');   // Redirect to the home page after logout
  };

  return (
    <nav className="flex justify-around bg-gray-900 text-white py-3 rounded-lg w-full max-w-4xl mx-auto fixed bottom-5 left-0 right-0 z-50 h-auto">
      <Link to="/" className="hover:text-gray-400 transition duration-300">Home</Link>
      {currentUser && currentUser.role === 'shopper' && (
        <Link to="/cart" className="hover:text-gray-400 transition duration-300">Cart</Link>
      )}
      <Link to="/dashboard" className="hover:text-gray-400 transition duration-300">Dashboard</Link>
      {currentUser ? (
        <>
          <button 
            onClick={handleLogoutUser} 
            className="hover:text-gray-400 transition duration-300">
            Logout
          </button>
        </>
      ) : (
        <>
          <Link to="/login" className="hover:text-gray-400 transition duration-300">Login</Link>
          <Link to="/register" className="hover:text-gray-400 transition duration-300">Register</Link>
        </>
      )}
    </nav>
  );
};

export default Navbar;
