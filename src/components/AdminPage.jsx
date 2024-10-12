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
    <div className="admin-page p-6 bg-gray-light min-h-screen">
      <h2 className="text-3xl font-bold mb-4 text-primary">Admin Dashboard</h2>
      <h3 className="text-2xl font-semibold mb-2 text-secondary">Registered Users</h3>
      <ul className="mb-4">
        {users.map((user) => (
          <li key={user.id} className="flex justify-between items-center mb-2 p-2 border-b border-gray-300 bg-gray-800 text-white">
            <span className="text-lg">{user.username} ({user.role})</span>
            <div className="flex items-center space-x-2">
              <button 
                onClick={() => handleDeleteUser(user.id)} 
                className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition duration-300 ease-in-out"
              >
                Delete
              </button>
              <select
                value={user.role}
                onChange={(e) => handleRoleChange(user.id, e.target.value)}
                className="p-2 border border-gray-300 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="shopper">Shopper</option>
                <option value="seller">Seller</option>
                <option value="admin">Admin</option>
              </select>
            </div>
          </li>
        ))}
      </ul>

      <h3 className="text-2xl font-semibold mb-2 text-secondary">Add New User</h3>
      <div className="flex flex-col space-y-4">
        <input
          type="text"
          placeholder="Username"
          value={newUsername}
          onChange={(e) => setNewUsername(e.target.value)}
          className="p-3 border border-gray-300 rounded-lg bg-gray-800 text-white focus:ring-2 focus:ring-primary focus:border-primary"
        />
        <input
          type="password"
          placeholder="Password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          className="p-3 border border-gray-300 rounded-lg bg-gray-800 text-white focus:ring-2 focus:ring-primary focus:border-primary"
        />
        <select
          value={newRole}
          onChange={(e) => setNewRole(e.target.value)}
          className="p-3 border border-gray-300 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-primary"
        >
          <option value="shopper">Shopper</option>
          <option value="seller">Seller</option>
          <option value="admin">Admin</option>
        </select>
        <button 
          onClick={handleAddUser}
          className="bg-primary text-white py-3 rounded-lg font-semibold hover:bg-secondary transition duration-300 ease-in-out"
        >
          Add User
        </button>
      </div>
    </div>
  );
};

export default AdminPage;
