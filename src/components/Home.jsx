// src/components/Home.jsx
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import LogoutButton from './LogoutButton';
import { Link } from 'react-router-dom';
import { fetchProducts } from '../features/productSlice'; // Import your fetchProducts action

const Home = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.users.currentUser);
  const products = useSelector((state) => state.products.products); // Assuming products are in the state

  useEffect(() => {
    dispatch(fetchProducts()); // Fetch products on component mount
  }, [dispatch]);

  return (
    <div className="home-container min-h-screen bg-gray-light flex flex-col items-center p-6">
  <h1 className="text-4xl font-bold text-dark-color mb-6">
    Welcome {currentUser ? 'to our E-Commerce MarketPlace' : 'Please, Sign Up or Login'}!
  </h1>
  <p className="text-lg text-dark-color mb-10 max-w-2xl text-center">
    Products with a twist 😏👍
  </p>

  <h2 className="text-2xl font-semibold mb-4 text-dark-color">Discover the latest Items On Sale (Click/Hover on products to reveal)</h2>

  <div className="masonry-grid">
    {products.map(product => (
      <div key={product.id} className="masonry-item relative overflow-hidden rounded-lg shadow-lg bg-gray-900 transition duration-300 transform hover:scale-105">
        {/* "On Sale" Badge */}
      {product.onSale && (
        <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
          On Sale
        </span>
      )}
        <img
          src={product.image ? product.image : 'data:image/png;base64,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'}
          alt={product.name} 
          className="w-full h-64 object-cover" 
        />
        
        <div className="product-info absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-end p-4 opacity-0 hover:opacity-100 transition-opacity duration-300">
          <h3 className="text-lg font-bold text-white mb-2">{product.name}</h3>
          <p className="text-gray-300 mb-2">Price: ${!isNaN(product.price) ? Number(product.price).toFixed(2) : 'N/A'}</p>
          <Link 
            to={`/product/${product.id}`} 
            className="mt-4 bg-primary text-white py-2 px-4 rounded-lg hover:bg-secondary transition duration-300"
          >
            View Details
          </Link>
        </div>
      </div>
    ))}
  </div>
</div>

  );
};

export default Home;
