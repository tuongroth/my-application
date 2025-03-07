import React from 'react'; 
import Navbar from './components/Navbar/Navbar'; 
import { Route, Routes } from "react-router-dom"; 
import Home from './pages/Home/Home'; 
import Cart from './pages/Cart/Cart';  // Import component Cart
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';  // Import component PlaceOrder

const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />  {/* Thêm Route cho Cart */}
        <Route path="/order" element={<PlaceOrder />} />  {/* Thêm Route cho PlaceOrder */}
      </Routes>
    </div>
  );
};

export default App;

