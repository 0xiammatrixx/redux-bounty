import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearCart } from '../features/cartSlice'; // Assuming you have a cart slice
import { purchaseProduct } from '../features/productSlice'; // Update this if necessary

const Checkout = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items); // Assuming you have a cart state

  const handleCheckout = () => {
    cartItems.forEach(item => {
      const product = products.find(prod => prod.id === item.id);
      if (product) {
        // Log the current stock before purchase
        console.log(`Current stock for ${product.name}: ${product.quantity}`);
        // Check if there’s enough stock
        if (product.quantity >= item.quantity) {
          // Update the product quantity
          dispatch(purchaseProduct({ id: item.id, quantity: item.quantity }));
          console.log(`Purchased ${item.quantity} of ${product.name}`);
        } else {
          console.error(`Not enough stock for ${product.name}`);
        }
      }
    });
    // Clear the cart after checkout
    dispatch(checkoutCart());
    // Optionally, you can redirect to a confirmation page or show a success message
  };
  
  return (
    <div>
      <h2>Checkout</h2>
      {/* List items in cart */}
      {cartItems.map(item => (
        <div key={item.id}>
          <p>{item.name} - Quantity: {item.quantity}</p>
        </div>
      ))}
      <button onClick={handleCheckout}>Complete Purchase</button>
    </div>
  );
};

export default Checkout;
