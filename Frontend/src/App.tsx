import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Router and Routes
import ForgotPassword from './Pages/ForgotPassword';
import Login from './Pages/Login';

function App() {
  return (
    <Router>
      <Routes>
        
        <Route path="/" element={<Login />} />
        
        <Route path="/forgot-password" element={<ForgotPassword />} />
        
      </Routes>
    </Router>
  );
}

export default App;
