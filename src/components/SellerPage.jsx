import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateProduct, removeProduct, addProduct } from '../features/productSlice'; // Add addProduct here

const SellerPage = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products); // Retrieve products from state
  const [newProduct, setNewProduct] = useState({ name: '', price: '', quantity: '', sellerName: '', sellerContact: '' });

  // Handle product property updates (name, price, quantity, seller)
  const handleProductUpdate = (id, updatedProduct) => {
    dispatch(updateProduct({ id, updatedProduct }));
  };

  // Handle adding a new product
  const handleAddProduct = () => {
    const product = { id: Date.now(), ...newProduct };
    dispatch(addProduct(product));
    setNewProduct({ name: '', price: '', quantity: '', sellerName: '', sellerContact: '' }); // Reset form after adding
  };

  // Handle removing a product
  const handleRemoveProduct = (id) => {
    dispatch(removeProduct(id));
  };

  return (
    <div className="seller-page max-w-5xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-4xl font-bold text-gray-800 mb-6">Market Dashboard</h2>

      <h3 className="text-2xl font-semibold text-gray-700 mb-4">Add and Remove Market Products</h3>
      {products.map((product) => (
        <div key={product.id} className="border border-gray-300 rounded-lg p-4 mb-4 bg-gray-50 shadow-sm transition hover:shadow-md">
          <input
            type="text"
            value={product.name}
            onChange={(e) => handleProductUpdate(product.id, { ...product, name: e.target.value })}
            placeholder="Edit Name"
            className="bg-gray-200 text-gray-800 p-2 mb-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-400" // Adjusted margin-bottom to mb-3
          />
          <input
            type="number"
            value={product.price}
            onChange={(e) => handleProductUpdate(product.id, { ...product, price: e.target.value })}
            placeholder="Edit Price"
            className="bg-gray-200 text-gray-800 p-2 mb-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-400" // Adjusted margin-bottom to mb-3
          />
          <input
            type="number"
            value={product.quantity}
            onChange={(e) => handleProductUpdate(product.id, { ...product, quantity: e.target.value })}
            placeholder="Edit Quantity"
            className="bg-gray-200 text-gray-800 p-2 mb-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-400" // Adjusted margin-bottom to mb-3
          />
          <input
            type="text"
            value={product.sellerName}
            onChange={(e) => handleProductUpdate(product.id, { ...product, sellerName: e.target.value })}
            placeholder="Shop"
            className="bg-gray-200 text-gray-800 p-2 mb-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-400" // Adjusted margin-bottom to mb-3
          />
          <input
            type="text"
            value={product.sellerContact}
            onChange={(e) => handleProductUpdate(product.id, { ...product, sellerContact: e.target.value })}
            placeholder="Contact Us"
            className="bg-gray-200 text-gray-800 p-2 mb-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-400" // Adjusted margin-bottom to mb-4 for last input
          />
          <button onClick={() => handleRemoveProduct(product.id)} className="bg-red-600 text-white py-1 px-3 rounded hover:bg-red-700 transition duration-200">
            Remove Product
          </button>
        </div>
      ))}

      <h3 className="text-2xl font-semibold text-gray-700 mt-6 mb-4">Add New Product</h3>
      <input
        type="text"
        placeholder="Product Name"
        value={newProduct.name}
        onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
        className="bg-gray-200 text-gray-800 p-2 mb-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-400" // Adjusted margin-bottom to mb-3
      />
      <input
        type="number"
        placeholder="Product Price"
        value={newProduct.price}
        onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
        className="bg-gray-200 text-gray-800 p-2 mb-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-400" // Adjusted margin-bottom to mb-3
      />
      <input
        type="number"
        placeholder="Product Quantity"
        value={newProduct.quantity}
        onChange={(e) => setNewProduct({ ...newProduct, quantity: e.target.value })}
        className="bg-gray-200 text-gray-800 p-2 mb-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-400" // Adjusted margin-bottom to mb-3
      />
      <input
        type="text"
        placeholder="Shop"
        value={newProduct.sellerName}
        onChange={(e) => setNewProduct({ ...newProduct, sellerName: e.target.value })}
        className="bg-gray-200 text-gray-800 p-2 mb-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-400" // Adjusted margin-bottom to mb-3
      />
      <input
        type="text"
        placeholder="Contact Us"
        value={newProduct.sellerContact}
        onChange={(e) => setNewProduct({ ...newProduct, sellerContact: e.target.value })}
        className="bg-gray-200 text-gray-800 p-2 mb-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-400" // Adjusted margin-bottom to mb-4 for last input
      />
      <button onClick={handleAddProduct} className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-200">
        Add Product
      </button>
    </div>
  );
};

export default SellerPage;
