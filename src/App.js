import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from './components/navbar';
import { Shop } from './pages/Shop/shop.jsx';
import { Cart } from './pages/Cart/cart.jsx';
import { ShopContextProvider } from './context/shop-context';
import './App.css';

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar/>
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
      </Router>
      </ShopContextProvider>
    </div>
  );
};

export default App;






