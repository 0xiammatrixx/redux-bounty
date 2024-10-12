const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes'); // Import product routes

dotenv.config();

connectDB();

const app = express();
app.use(express.json());

app.use('/api', userRoutes); // User routes
app.use('/api', productRoutes); // Product routes

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
