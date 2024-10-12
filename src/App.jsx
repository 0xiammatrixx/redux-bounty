import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import SellerPage from './components/SellerPage';
import ShopperPage from './components/ShopperPage';
import Cart from './components/Cart';
import AdminPage from './components/AdminPage';
import NavBar from './components/NavBar';
import './App.css'; // Import your CSS
import ViewDetails from './components/ViewDetails';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <Router>
      <div className={darkMode ? 'dark-mode' : ''}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/seller" element={<SellerPage />} />
          <Route path="/shopper" element={<ShopperPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/navbar" element={<NavBar />} />
          <Route path="/product/:id" element={<ViewDetails />} />
        </Routes>
      </div>
      <NavBar toggleDarkMode={toggleDarkMode} />
    </Router>
  );
};

export default App;
