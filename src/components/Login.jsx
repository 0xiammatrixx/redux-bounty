import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../features/userSlice';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('shopper'); // Default role
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState(''); // State to hold error messages

  // Access the users from Redux state
  const users = useSelector((state) => state.users.users);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Find the user by username and password
    const foundUser = users.find(user => user.username === username && user.password === password);
    
    // Check if user exists and if the role is valid
    if (foundUser) {
      if (foundUser.role === role) {
        dispatch(loginUser({ username, password, role }));
        navigate('/dashboard'); // Redirect to dashboard after login
      } else {
        setError('Invalid role selected. Please select the correct role for this account.'); // Set error message for invalid role
      }
    } else {
      setError('Invalid username or password'); // Set error message for invalid credentials
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <form onSubmit={handleSubmit} className="bg-gray-800 p-10 rounded-lg shadow-xl max-w-md w-full">
        <h2 className="text-3xl font-bold text-center mb-6 text-white">Welcome Back, Login</h2>
        
        {error && <p className="text-red-500 text-center mb-4">{error}</p>} {/* Display error message */}
        
        <div className="mb-4">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="w-full p-3 border border-gray-600 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        
        <div className="mb-4">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full p-3 border border-gray-600 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        
        <div className="mb-6">
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
            className="w-full p-3 border border-gray-600 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 hover:bg-gray-600 cursor-pointer"
          >
            <option value="shopper">Shopper</option>
            <option value="seller">Seller</option>
            <option value="admin">Admin</option>
          </select>
        </div>
        
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition duration-300 ease-in-out"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
