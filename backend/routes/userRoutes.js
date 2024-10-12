const express = require('express');
const { getAllUsers, registerUser, loginUser } = require('../controllers/userController'); // Make sure these are correctly imported

const router = express.Router();

router.get('/users', getAllUsers); // Ensure this function exists and is correctly imported
router.post('/register', registerUser); // Ensure this function exists
router.post('/login', loginUser); // Ensure this function exists

module.exports = router;
