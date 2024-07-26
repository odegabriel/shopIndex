import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Cart from '../src/Components/Cart';
import HomePage from '../src/Components/HomePage';
import Login from '../src/Components/Login';
import Signup from '../src/Components/signup';
import Profile from '../src/Components/Profile';
import ProductsDetail from '../src/Components/ProductsDetails';
import Footer from '../src/Components/Footer';
import UserHomePage from '../src/Components/UserHomePage';
import PageNotFound from '../src/Components/PageNotFound';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/user" element={<UserHomePage />} />
        <Route path="/user/cart" element={<Cart />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/:user/:productId" element={<ProductsDetail />} />
        <Route path="*" element={<PageNotFound/>} />
      </Routes>
    </Router>
  );
}

export default App;
