import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Correct import for Link
import Background from "../assets/images/Background.jpg";


// Importing FontAwesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

import SignUp from './SignUp';
import Navbar from './Navbar';
import About from './About';
import Features from './Features';
import Pricing from './Pricing';
import Contact from './Contact';


const HomePage: React.FC = () => {

  const [showSignUp, setShowSignUp] = useState(false)

  return (
    <div>
    {/* Home Section with id="home" */}
    <div id="home" className="relative h-screen bg-cover bg-center" style={{ backgroundImage: `url(${Background})` }}>
      <Navbar /> {/* Add Navbar here */}
  
    {/* Overlay placed behind the nav */}
     <div className="absolute inset-0 bg-black opacity-65"></div>

      <div className="absolute inset-0 flex flex-col justify-center items-center sm:items-start px-6 sm:px-10 text-white">
        <div className="text-center sm:text-left">
          <h1 className="text-3xl sm:text-5xl font-bold mb-4 font-Raleway">
            Where Artists Can Enhance <br /> Opportunities
          </h1>
          <p className="text-base sm:text-lg font-thin mb-8 font-Opensans">
            Connect with Experts in the entertainment industry <br /> assess your skill and performance
          </p>
       
          <button
          onClick={() => setShowSignUp(true)}
           className="font-Raleway font-semibold text-2xl bg-[#FE221E] hover:bg-red-500 transition cursor-pointer text-white px-4 py-1 rounded-xl">
           Sign Up
           </button>

      {showSignUp && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative bg-white p-8 rounded-lg shadow-lg w-[80%] max-w-4xl">
            <button
              onClick={() => setShowSignUp(false)}
              className="absolute top-4 right-4 text-xl text-gray-600 hover:text-black"
            >
               X
            </button>
            <SignUp />
          </div>
        </div>
      )}
          
        </div>
      </div>
    </div>

  
      
      {/* About Section */}
      <About />
      
 
      {/* Features Section */}
       <Features />
      
      {/* Pricing Section */}
      <Pricing />

       {/* Contact Section */}
       <Contact />

       {/* Footer */}
       <div className=" bg-[#011936] text-white py-12">
       <div className="max-w-6xl mx-auto px-4">
       <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
      
       <div className="text-center md:text-left mb-6 md:mb-0">
        <h2 className="text-3xl font-bold">Logo</h2>
        <p className="text-sm mt-2 text-gray-400">Lorem ipsum dolor sit amet pretium consectetur adipiscing elit.</p>
       </div>

       {/* Company Links Section */}
        <div className="text-center md:text-left">
        <h2 className="text-lg font-semibold mb-2">Company</h2>
        <ul className="text-sm space-y-2 text-gray-400">
          <li><Link to="/" className="hover:text-white">About Landio</Link></li>
          <li><Link to="/" className="hover:text-white">Features</Link></li>
          <li><Link to="/" className="hover:text-white">Pricing</Link></li>
          <li><Link to="/" className="hover:text-white">Contact & Support</Link></li>
        </ul>
      </div>

      {/* Social Media Icons Section */}
      <div className="flex justify-center space-x-6 mt-6 md:mt-0">
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600 text-2xl">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600 text-2xl">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600 text-2xl">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-600 text-2xl">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>
    </div>
  </div>

  
    <div className="border-t border-gray-700 text-center py-6 text-gray-400">
    <p className="text-sm">© {new Date().getFullYear()} All rights are reserved.</p>

  </div>
</div>

  </div>  
    
  );
};

export default HomePage;
