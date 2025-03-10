import React, { createContext, useState, useEffect } from 'react';
import { food_list } from '../assets/assets'; // Assuming food_list is imported from a data file

// Create context for the store
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

  // Calculate the total cart amount based on cart items and prices
  const getTotalCartAmount = () => {
    let totalAmount = 0;
    // Loop through each item in cartItems
    for (const itemId in cartItems) {
      const item = food_list.find((food) => food._id === itemId); // Find the item in food_list by _id
      if (item) {
        totalAmount += item.price * cartItems[itemId]; // Multiply price by quantity
      }
    }
    return totalAmount; // Return the calculated total amount
  };

  // Define context value to be shared across the application
  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount, // Provide the function for calculating the total amount
    food_list, // Provide the food list for reference in components
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children} {/* Render the children components */}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
