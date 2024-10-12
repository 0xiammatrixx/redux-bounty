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
    <div className="seller-page p-6">
      <h2 className="text-3xl font-bold mb-4">Seller Dashboard</h2>

      <h3 className="text-2xl font-semibold mb-2">Available Products</h3>
      {products.map((product) => (
        <div key={product.id} className="border border-gray-400 rounded-lg p-4 mb-4">
          <input
            type="text"
            value={product.name}
            onChange={(e) => handleProductUpdate(product.id, { ...product, name: e.target.value })}
            placeholder="Edit Name"
            className="bg-gray-800 text-white p-2 mb-2 rounded"
          />
          <input
            type="number"
            value={product.price}
            onChange={(e) => handleProductUpdate(product.id, { ...product, price: e.target.value })}
            placeholder="Edit Price"
            className="bg-gray-800 text-white p-2 mb-2 rounded"
          />
          <input
            type="number"
            value={product.quantity}
            onChange={(e) => handleProductUpdate(product.id, { ...product, quantity: e.target.value })}
            placeholder="Edit Quantity"
            className="bg-gray-800 text-white p-2 mb-2 rounded"
          />
          <input
            type="text"
            value={product.sellerName}
            onChange={(e) => handleProductUpdate(product.id, { ...product, sellerName: e.target.value })}
            placeholder="Seller Name"
            className="bg-gray-800 text-white p-2 mb-2 rounded"
          />
          <input
            type="text"
            value={product.sellerContact}
            onChange={(e) => handleProductUpdate(product.id, { ...product, sellerContact: e.target.value })}
            placeholder="Seller Contact"
            className="bg-gray-800 text-white p-2 mb-2 rounded"
          />
          <button onClick={() => handleRemoveProduct(product.id)} className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600">
            Remove Product
          </button>
        </div>
      ))}

      <h3 className="text-2xl font-semibold mb-2">Add New Product</h3>
      <input
        type="text"
        placeholder="Product Name"
        value={newProduct.name}
        onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
        className="bg-gray-800 text-white p-2 mb-2 rounded"
      />
      <input
        type="number"
        placeholder="Product Price"
        value={newProduct.price}
        onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
        className="bg-gray-800 text-white p-2 mb-2 rounded"
      />
      <input
        type="number"
        placeholder="Product Quantity"
        value={newProduct.quantity}
        onChange={(e) => setNewProduct({ ...newProduct, quantity: e.target.value })}
        className="bg-gray-800 text-white p-2 mb-2 rounded"
      />
      <input
        type="text"
        placeholder="Seller Name"
        value={newProduct.sellerName}
        onChange={(e) => setNewProduct({ ...newProduct, sellerName: e.target.value })}
        className="bg-gray-800 text-white p-2 mb-2 rounded"
      />
      <input
        type="text"
        placeholder="Seller Contact"
        value={newProduct.sellerContact}
        onChange={(e) => setNewProduct({ ...newProduct, sellerContact: e.target.value })}
        className="bg-gray-800 text-white p-2 mb-2 rounded"
      />
      <button onClick={handleAddProduct} className="bg-primary text-white py-2 px-4 rounded hover:bg-secondary">
        Add Product
      </button>
    </div>
  );
};

export default SellerPage;
