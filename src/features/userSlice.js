// src/features/userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [],        // Ensure this is initialized as an array
  currentUser: null,
};

const validRoles = ['shopper', 'seller', 'admin']; // Define valid roles

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    registerUser: (state, action) => {
      // Ensure users is always an array
      if (!Array.isArray(state.users)) {
        state.users = [];  // Initialize as an array if it's not
      }
      state.users.push(action.payload); // This should work now
    },
    addUser: (state, action) => {
      // Add new user to the existing users array
      state.users.push(action.payload);
    },
    deleteUser: (state, action) => {
      state.users = state.users.filter(user => user.id !== action.payload);
    },
    updateUserRole: (state, action) => {
      const user = state.users.find(user => user.id === action.payload.id);
      if (user) {
        user.role = action.payload.role;
      }
    },
    loginUser: (state, action) => {
      const foundUser = state.users.find(user => 
        user.username === action.payload.username && 
        user.password === action.payload.password &&
        validRoles.includes(user.role) // Check if role is valid
      );
      if (foundUser) {
        state.currentUser = foundUser;
      } else {
        throw new Error('Invalid username, password, or role');
      }
    },
    logoutUser: (state) => {
      state.currentUser = null;
    },
  },
});

// Export the actions
export const { addUser, registerUser, deleteUser, updateUserRole, loginUser, logoutUser } = userSlice.actions;

// Export the reducer
export default userSlice.reducer;
