import React, { useState } from 'react';

export const CartContext = React.createContext();

export const CartProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);
  const [loggedIn, setLoggedIn] = useState([]);

  return (
    <CartContext.Provider
      value={[cartItems, setCartItems, loggedIn, setLoggedIn]}
    >
      {props.children}
    </CartContext.Provider>
  );
};
