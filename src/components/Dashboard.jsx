import React from 'react';
import { useSelector } from 'react-redux';
import SellerPage from './SellerPage'; // Import the pages for each role
import AdminPage from './AdminPage';
import ShopperPage from './ShopperPage';

const Dashboard = () => {
  const currentUser = useSelector((state) => state.users.currentUser); // Get current user from state

  if (!currentUser) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900 relative">
        <div className="absolute inset-0 bg-cover bg-center opacity-50" style={{ backgroundImage: "url('https://source.unsplash.com/random/1920x1080/?business,login')" }}></div>
        <div className="relative z-10 text-white text-center p-6 rounded-lg shadow-lg bg-gray-800 bg-opacity-80">
          <h2 className="text-3xl font-bold mb-4">Welcome to Your Dashboard</h2>
          <p className="mb-6">Please log in to access your personalized content and features.</p>
          <a 
            href="/login"
            className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Log In
          </a>
        </div>
      </div>
    );
  }

  // Role-based rendering
  if (currentUser.role === 'admin') {
    return <AdminPage />;
  }

  if (currentUser.role === 'seller') {
    return <SellerPage />;
  }

  if (currentUser.role === 'shopper') {
    return <ShopperPage />;
  }

  return <div>Invalid role, please try again.</div>;
};

export default Dashboard;
