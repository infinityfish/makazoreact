import React from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../CartContext';

function Navbar() {
  const [cartItems] = React.useContext(CartContext);
  return (
    <div>
      <Link to="/">MakazoReact</Link> |
      <Link to="/cart">Cart: ({cartItems.length})</Link> |
      <Link to="/login">login</Link>
    </div>
  );
}
export default Navbar;
