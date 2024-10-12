import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateUserRole, deleteUser, addUser } from '../features/userSlice';

const AdminPage = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  const [newUsername, setNewUsername] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [newRole, setNewRole] = useState('shopper'); // Default role

  const handleAddUser = () => {
    if (newUsername && newPassword) {
      // Create new user object
      const newUser = {
        id: Date.now(), // Generate a unique ID for the new user
        username: newUsername,
        password: newPassword,
        role: newRole,
      };
      // Dispatch the addUser action
      dispatch(addUser(newUser));

      // Clear the form fields
      setNewUsername('');
      setNewPassword('');
      setNewRole('shopper');
    }
  };

  const handleDeleteUser = (id) => {
    dispatch(deleteUser(id));
  };

  const handleRoleChange = (id, newRole) => {
    dispatch(updateUserRole({ id, role: newRole }));
  };

  return (
    <div className="admin-page p-8 bg-gray-900 min-h-screen">
      <h2 className="text-4xl font-bold mb-6 text-white">Admin Dashboard</h2>
      <h3 className="text-2xl font-semibold mb-4 text-gray-300">Registered Users</h3>
      <ul className="mb-6 space-y-4">
        {users.map((user) => (
          <li key={user.id} className="flex justify-between items-center p-4 bg-gray-800 text-white rounded-lg shadow-md">
            <span className="text-lg">{user.username} ({user.role})</span>
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => handleDeleteUser(user.id)} 
                className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition duration-300 ease-in-out"
              >
                Delete
              </button>
              <select
                value={user.role}
                onChange={(e) => handleRoleChange(user.id, e.target.value)}
                className="p-2 border border-gray-600 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="shopper">Shopper</option>
                <option value="seller">Seller</option>
                <option value="admin">Admin</option>
              </select>
            </div>
          </li>
        ))}
      </ul>

      <h3 className="text-2xl font-semibold mb-4 text-gray-300">Add New User</h3>
      <div className="space-y-4">
        <input
          type="text"
          placeholder="Username"
          value={newUsername}
          onChange={(e) => setNewUsername(e.target.value)}
          className="p-3 border border-gray-600 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
        <input
          type="password"
          placeholder="Password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          className="p-3 border border-gray-600 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
        <select
          value={newRole}
          onChange={(e) => setNewRole(e.target.value)}
          className="p-3 border border-gray-600 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="shopper">Shopper</option>
          <option value="seller">Seller</option>
          <option value="admin">Admin</option>
        </select>
        <button 
          onClick={handleAddUser}
          className="bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 ease-in-out w-full"
        >
          Add User
        </button>
      </div>
    </div>
  );
};

export default AdminPage;
