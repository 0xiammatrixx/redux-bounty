// src/components/Navbar.jsx
import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'; // For React Router v6
import { logoutUser } from '../features/userSlice'; // Assuming you have a logout action
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage the navbar collapse
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentUser = useSelector((state) => state.users.currentUser);
  const navRef = useRef(); // Ref to track clicks outside

  const handleLogoutUser = () => {
    dispatch(logoutUser());  // Dispatch logout action
    navigate('/');   // Redirect to the home page after logout
  };

  // Toggle the navbar visibility
  const toggleNav = () => {
    setIsOpen(!isOpen); // Toggle the state between open and closed
  };

  // Close the navbar when clicking outside of it
  const handleClickOutside = (event) => {
    if (navRef.current && !navRef.current.contains(event.target)) {
      setIsOpen(false); // Close the navbar when clicking outside
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      {/* Floating button for the menu on the top-right (or left) */}
      {!isOpen && (
        <button 
          onClick={toggleNav} 
          className="fixed top-5 right-5 text-3xl bg-gray-900 text-white p-3 rounded-full z-50 focus:outline-none"
        >
          &#9776; {/* Hamburger icon */}
        </button>
      )}

      {/* Full sidebar navbar (only visible when menu is clicked) */}
      <div 
        ref={navRef} 
        className={`fixed top-0 right-0 w-48 h-full bg-gray-900 text-white py-8 shadow-lg z-40 transform transition-transform duration-950 ease-in-out rounded-l-lg ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col items-center">
          <button 
            onClick={toggleNav} 
            className="text-xl mb-4 text-gray-400 hover:text-white transition duration-300"
          >
            &#10005; {/* Close icon (X) */}
          </button>
          <Link to="/" className="hover:text-gray-400 transition duration-300 py-2" onClick={toggleNav}>Home</Link>
          {currentUser && currentUser.role === 'shopper' && (
            <Link to="/cart" className="hover:text-gray-400 transition duration-300 py-2" onClick={toggleNav}>Cart</Link>
          )}
          <Link to="/dashboard" className="hover:text-gray-400 transition duration-300 py-2" onClick={toggleNav}>Dashboard</Link>
          {currentUser ? (
            <button 
              onClick={() => { handleLogoutUser(); toggleNav(); }} 
              className="bg-red-600 text-white py-1 px-3 rounded hover:bg-red-700 transition duration-200 fixed bottom-20">
              Logout
            </button>
          ) : (
            <>
              <Link to="/login" className="mt-4 bg-primary text-white py-2 px-4 rounded-lg hover:bg-secondary transition duration-300" onClick={toggleNav}>Login</Link>
              <Link to="/register" className="mt-4 bg-primary text-white py-2 px-4 rounded-lg hover:bg-secondary transition duration-300" onClick={toggleNav}>Register</Link>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
