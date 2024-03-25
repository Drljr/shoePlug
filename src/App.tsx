import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Login from './Pages/LoginPage/Login';
import Signup from './Pages/SignupPage/Signup';
import Landing from './Pages/LandingPage/Landing';
import Cart from './Pages/Cart/Cart';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Landing" element={<Landing />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
