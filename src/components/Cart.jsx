// src/components/CartPage.jsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkoutCart, removeFromCart } from '../features/cartSlice';
import { purchaseProduct } from '../features/productSlice';
import { Link } from 'react-router-dom';

const CartPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  // Calculate total price
  const totalPrice = cartItems.reduce((total, product) => {
    const productPrice = typeof product.price === 'number' ? product.price : 0;
    return total + productPrice * product.quantity;
  }, 0);

  const handleCheckout = () => {
    cartItems.forEach(product => {
      dispatch(purchaseProduct({ id: product.id, quantity: product.quantity }));
    });
    dispatch(checkoutCart());
    alert('Checkout successful!');
  };

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-4xl font-bold mb-6 text-center text-gray-800">Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <div className="flex flex-col items-center">
        <p className="text-center text-lg text-gray-500  mb-6">Add Items to your cart to see them here</p>
        <Link to="/shopper" className="bg-orange-500 hover:bg-orange-400 text-white font-bold py-2 px-4 rounded">
            Add Items
          </Link>
          </div>
      ) : (
        <>
          {/* Total Price Display */}
          <div className="bg-gray-100 shadow-lg rounded-lg p-4 mb-6">
            <div className="flex justify-between font-bold text-xl text-gray-800">
              <span>Total:</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
          </div>

          {/* Product Items */}
          <div className="bg-gray-100 shadow-lg rounded-lg p-4">
            {cartItems.map(product => (
              <div key={product.id} className="flex justify-between items-center border-b py-4 last:border-b-0">
                <div className="flex-1">
                  <span className="font-semibold text-gray-700">{product.name}</span>
                  <div className="text-sm text-gray-500">Qty: {product.quantity}</div>
                </div>
                <div className="flex-none">
                  <span className="text-lg font-bold text-gray-800">
                    ${typeof product.price === 'number' ? product.price.toFixed(2) : 'N/A'}
                  </span>
                  <button 
                    onClick={() => handleRemoveFromCart(product.id)} 
                    className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-300 ease-in-out">
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Checkout Button */}
          <button 
            onClick={handleCheckout} 
            className="mt-6 w-full py-3 bg-gray-800 text-white rounded-lg shadow-md hover:bg-gray-700 transition duration-300">
            Complete Payment
          </button>
        </>
      )}
    </div>
  );
};

export default CartPage;
