import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from "./Home";
import Stores from './Stores';
import Admin from './Admin';
import Login from './Login';      // 👈 import Login
import Signup from './Signup';    // 👈 import Signup

function App() {
  // Shared state for all stores
  const [stores, setStores] = useState([
    { id: 1, name: "Cafe Delight", address: "Mumbai", ratings: [] },
    { id: 2, name: "Fresh Mart", address: "Pune", ratings: [] },
    { id: 3, name: "Book Hub", address: "Bangalore", ratings: [] },
  ]);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stores" element={<Stores stores={stores} setStores={setStores} />} />
        <Route path="/admin" element={<Admin stores={stores} setStores={setStores} />} />
        <Route path="/login" element={<Login />} />       {/* 👈 Login route */}
        <Route path="/signup" element={<Signup />} />     {/* 👈 Signup route */}
      </Routes>
    </Router>
  );
}

export default App;
