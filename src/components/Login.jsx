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
    <div className="min-h-screen flex items-center justify-center bg-gray-light">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold text-center mb-6 text-primary">Login</h2>
        
        {error && <p className="text-red-500 text-center">{error}</p>} {/* Display error message */}
        
        <div className="mb-4">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="w-full p-3 border border-gray-300 rounded-lg bg-gray-300 focus:ring-2 focus:ring-primary focus:border-primary"
          />
        </div>
        
        <div className="mb-4">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full p-3 border border-gray-300 rounded-lg bg-gray-300 focus:ring-2 focus:ring-primary focus:border-primary"
          />
        </div>
        
        <div className="mb-6">
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
            className="w-full p-3 border border-gray-300 rounded-lg bg-gray-300 text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary hover:bg-gray-400 cursor-pointer"
          >
            <option value="shopper">Shopper</option>
            <option value="seller">Seller</option>
            <option value="admin">Admin</option>
          </select>
        </div>
        
        <button
          type="submit"
          className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-secondary transition duration-300 ease-in-out"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
