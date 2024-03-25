import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Login from './Pages/LoginPage/Login';
import Signup from './Pages/SignupPage/Signup';
import Landing from './Pages/LandingPage/Landing';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Landing" element={<Landing />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
