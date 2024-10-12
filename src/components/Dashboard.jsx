import React from 'react';
import { useSelector } from 'react-redux';
import SellerPage from './SellerPage'; // Import the pages for each role
import AdminPage from './AdminPage';
import ShopperPage from './ShopperPage';

const Dashboard = () => {
  const currentUser = useSelector((state) => state.users.currentUser); // Get current user from state

  if (!currentUser) {
    return <div>Please log in first.</div>;
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
