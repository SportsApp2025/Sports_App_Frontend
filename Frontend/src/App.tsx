import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage'; // Adjust path as per your folder structure
import Login from './Pages/Login'; // Adjust path as per your folder structure
import ForgotPassword from './Pages/ForgotPassword';



const App: React.FC = () => {
  return (
    <BrowserRouter> {/* Ensure that your app is wrapped inside BrowserRouter */}
      <Routes>
        {/* Define routes for the Home, Login, and other pages */}
        <Route path="/" element={<HomePage />} /> {/* Home page route */}
        <Route path="/login" element={<Login />} /> {/* Login page route */}
        <Route path="/forgotpassword" element={<ForgotPassword />} /> 
       
      </Routes>
    </BrowserRouter>
  );
};

export default App;
