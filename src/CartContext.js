import React, { useState } from 'react';
import Cookies from 'js-cookie';

export const CartContext = React.createContext();

export const CartProvider = (props) => {
  const [cartItems, setCartItems] = useState(
    Cookies.get('cartItems') ? JSON.parse(Cookies.get('cartItems')) : []
  ); //initial state
  const [loggedIn, setLoggedIn] = useState([]);

  React.useEffect(() => {
    Cookies.set('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={[cartItems, setCartItems, loggedIn, setLoggedIn]}
    >
      {props.children}
    </CartContext.Provider>
  );
};
