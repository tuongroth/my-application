import React, { createContext, useState, useEffect } from 'react';
import { food_list } from '../assets/assets';

// Create context
export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({}); // State to manage cart items

  // Add item to the cart
  const addToCart = (itemId) => {
    setCartItems((prev) => {
      if (!prev[itemId]) {
        return { ...prev, [itemId]: 1 }; // Add the item with quantity 1 if it's not in the cart
      }
      return { ...prev, [itemId]: prev[itemId] + 1 }; // Increment quantity if the item is already in the cart
    });
  };

  // Remove item from the cart
  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      if (prev[itemId] > 1) {
        return { ...prev, [itemId]: prev[itemId] - 1 }; // Decrease quantity if greater than 1
      }
      const newCart = { ...prev };
      delete newCart[itemId]; // Remove the item completely if quantity reaches 0
      return newCart;
    });
  };

  // Log cart items for debugging
  useEffect(() => {
    console.log(cartItems); // This logs the cart items whenever they change
  }, [cartItems]);

  // Define context value that will be passed to children
  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    setCartItems, // Thêm dấu phẩy để tránh lỗi
    food_list
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
