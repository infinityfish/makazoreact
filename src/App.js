import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Login from './pages/Login';
import { CartProvider } from './CartContext';

import { QueryClient, QueryClientProvider } from 'react-query';
const queryClient = new QueryClient();

function App() {
  return (
    <Router>
      <CartProvider>
        <QueryClientProvider client={queryClient}>
          <Navbar />
          <Route path="/" exact component={Home}></Route>
          <Route path="/cart" component={Cart}></Route>
          <Route path="/login" component={Login}></Route>
          {/* <Route path="/profile" render={()=> loggedIn ? <Profile /> : <Login />}></Route> */}
        </QueryClientProvider>
      </CartProvider>
    </Router>
  );
}

export default App;
