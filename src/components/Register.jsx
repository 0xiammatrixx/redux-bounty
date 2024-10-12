// src/components/Register.jsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from '../features/userSlice';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('shopper'); // Default role
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = { id: Date.now(), username, password, role };
    dispatch(registerUser(newUser));
    navigate('/login'); // Redirect to login after registration
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-200 p-4 rounded-lg shadow-md">
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
        className="w-full p-2 mb-4 border rounded-lg bg-gray-300" // Change background color here
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        className="w-full p-2 mb-4 border rounded-lg bg-gray-300" // Change background color here
      />
      <select value={role} onChange={(e) => setRole(e.target.value)} required className="w-full p-2 mb-4 border rounded-lg bg-gray-300">
        <option value="shopper">Shopper</option>
        <option value="seller">Seller</option>
        <option value="admin">Admin</option>
      </select>
      <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition">
        Register
      </button>
    </form>
  );
};

export default Register;
