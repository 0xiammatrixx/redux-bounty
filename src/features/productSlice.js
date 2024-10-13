import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [
    { id: 1, name: "Nike Air Jordan 4s", price: 140.99, quantity: 0 },
    // Add more products as needed
  ],
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts(state, action) {
      // Ensure that all products have a numeric price
      state.products = action.payload.map(product => ({
        ...product,
        price: parseFloat(product.price), // Ensure price is a number
      }));
    },
    addProduct: (state, action) => {
      // Ensure the new product has a numeric price
      const newProduct = {
        ...action.payload,
        price: parseFloat(action.payload.price),
      };
      state.products.push(newProduct);
    },
    updateProduct: (state, action) => {
      const { id, updatedProduct } = action.payload;
      const productIndex = state.products.findIndex((product) => product.id === id);
      if (productIndex >= 0) {
        state.products[productIndex] = {
          ...updatedProduct,
          price: parseFloat(updatedProduct.price), // Ensure updated price is a number
        };
      }
    },
    removeProduct: (state, action) => {
      state.products = state.products.filter((product) => product.id !== action.payload);
    },
    purchaseProduct: (state, action) => {
      const { id, quantity } = action.payload;
      const productIndex = state.products.findIndex((product) => product.id === id);
      if (productIndex >= 0) {
        state.products[productIndex].quantity -= quantity;
        if (state.products[productIndex].quantity < 0) {
          state.products[productIndex].quantity = 0; // Ensure stock doesn't go below 0
        }
      }
    },
  },
});

// Fetch products from the API and set them in the state
export const fetchProducts = () => async (dispatch) => {
  const response = await fetch('/api/products');
  const data = await response.json();
  
  // Ensure all fetched products have a numeric price
  const productsWithValidPrices = data.map(product => ({
    ...product,
    price: parseFloat(product.price), // Ensure price is a number
  }));
  
  dispatch(setProducts(productsWithValidPrices));
};

export const { setProducts, addProduct, updateProduct, removeProduct, purchaseProduct } = productSlice.actions;

export default productSlice.reducer;
