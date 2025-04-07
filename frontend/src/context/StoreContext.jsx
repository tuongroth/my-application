import React, { createContext, useState, useEffect } from 'react';
import { food_list } from '../assets/assets'; // Adjust the path if needed

// Create context for the store
export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({}); // State to manage cart items

  // Add item to the cart
  const addToCart = (itemId) => {
    setCartItems((prev) => {
      if (!prev[itemId]) {
        // If the item is not in the cart, add it with quantity 1
        return { ...prev, [itemId]: 1 };
      }
      // If the item is already in the cart, increment its quantity
      return { ...prev, [itemId]: prev[itemId] + 1 };
    });
  };

  // Remove item from the cart
  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      if (prev[itemId] > 1) {
        // Decrease quantity if more than 1
        return { ...prev, [itemId]: prev[itemId] - 1 };
      }
      // Otherwise, remove the item from the cart entirely
      const newCart = { ...prev };
      delete newCart[itemId];
      return newCart;
    });
  };

  // Calculate the total cart amount based on item prices and quantities
  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const itemId in cartItems) {
      if (cartItems[itemId] > 0) {
        // Find the corresponding product in the food_list
        const item = food_list.find((food) => food._id === itemId);
        if (item) {
          totalAmount += item.price * cartItems[itemId];
        }
      }
    }
    return totalAmount;
  };

  // Log cart items for debugging whenever they change
  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);

  // Context value to be shared across the application
  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    food_list,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
