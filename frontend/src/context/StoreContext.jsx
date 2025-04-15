import React, { createContext, useState, useEffect } from 'react';
import { food_list } from '../assets/assets'; // Assuming food_list is imported from a data file

// Create context for the store
export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({}); // State to manage cart items

  // Add item to the cart
  const addToCart = (itemId) => {				
    if (!cartItems[itemId]){				
    setCartItems((prev)=>({...prev,[itemId]:1}))
  }				
    else { 
      setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
    }				
    }				
    
    
    
  // Remove item from the cart
  const removeFromCart = (itemId) => {			
    setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
  }			       
  
    useEffect(()=>{	
      console.log(cartItems);	
      },[cartItems])


  const contextValue = {			
    cartItems,			
    addToCart,			
    removeFromCart,			
    setCartItems,			
    food_list, // Provide the food list for reference in components			
    };			
          

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children} {/* Render the children components */}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
