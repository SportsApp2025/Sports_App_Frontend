import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage'; 
import EmailVerification from './Pages/EmailVerification';
import Login from './Pages/Login'; // Adjust path as per your folder structure
import ForgotPassword from './Pages/ForgotPassword';
import Detailsform from './Pages/Detailsform'
import SignUp from './Pages/SignUp';
import SignupPage from './Pages/SignupPage';
import ResetPassword from './Pages/ResetPassword';

import Details from './ProfilePage/details ';
import Reviews from './ProfilePage/reviews';
import Media from './ProfilePage/media';
import MediaUpload from './ProfilePage/MediaUpload';





const App: React.FC = () => {
  return (
    <BrowserRouter> {/* Ensure that your app is wrapped inside BrowserRouter */}
      <Routes>
        {/* Define routes for the Home, Login, and other pages */}
        <Route path="/" element={<HomePage />} /> {/* Home page route */}
        <Route path="/emailverification" element={<EmailVerification />} /> {/* Home page route */}
        <Route path="/login" element={<Login />} /> {/* Login page route */}
        <Route path="/forgotpassword" element={<ForgotPassword />} /> 
        <Route path="/detailsform" element={<Detailsform />} /> 
        <Route path="/signup" element={<SignUp />} /> 
        <Route path="/signuppage" element={<SignupPage />} /> 
        <Route path="/resetpassword" element={<ResetPassword />} /> 
        
        <Route path="/details" element={<Details />} />
        <Route path="/media" element={<Media />} />

        <Route path="/reviews" element={<Reviews />} />
        <Route path="/mediaupload" element={<MediaUpload />} />
        


      
      
      
       



           

        

         
      </Routes>
    </BrowserRouter>
  );
};

export default App;
