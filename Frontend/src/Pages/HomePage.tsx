import React from 'react';
import { Link } from 'react-router-dom'; // Correct import for Link
import Background from "../assets/images/Background.jpg";
import aboutimg from "../assets/images/aboutimg.jpg";


// Importing FontAwesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faFutbol } from '@fortawesome/free-solid-svg-icons';

import Navbar from './Navbar';

const HomePage: React.FC = () => {
  return (
    <div>
    {/* Home Section with id="home" */}
    <div id="home" className="relative h-screen bg-cover bg-center" style={{ backgroundImage: `url(${Background})` }}>
      <Navbar /> {/* Add Navbar here */}
  
      {/* Overlay placed behind the nav */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
  
      <div className="absolute inset-0 flex flex-col justify-center items-center sm:items-start px-6 sm:px-10 text-white">
        <div className="text-center sm:text-left">
          <h1 className="text-3xl sm:text-5xl font-bold mb-4 font-Raleway">
            Where Artists Can Enhance <br /> Opportunities
          </h1>
          <p className="text-base sm:text-lg font-thin mb-8 font-Opensans">
            Connect with Experts in the entertainment industry <br /> assess your skill and performance
          </p>
          <Link to="/signup" className="font-Raleway font-semibold text-xl sm:text-2xl bg-[#FE221E] hover:bg-red-500 transition cursor-pointer text-white px-6 py-3 rounded-xl">
            Sign Up
          </Link>
        </div>
      </div>
    </div>

  
  
      {/* About Section */}
      <div id="about" className="px-4 sm:px-8 md:px-16 lg:px-40 mt-24">
        {/* Container for the content */}
        <div className="flex flex-col md:flex-row items-center bg-yellow-100 p-4 md:p-12 rounded-xl shadow-lg">
          
          {/* Left Content */}
          <div className="md:w-1/2 text-left mb-6 md:mb-0">
            <h4 className="text-red-600 font-semibold font-Raleway">Why Choose Us</h4>
            <h2 className="text-2xl font-bold text-gray-900 mt-2 font-Opensans">Lorem ipsum dolor sit amet pretium</h2>
            <p className="text-gray-600 mt-4 font-Opensans">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem consectetur adipiscing elit.Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit.
            </p>
            <p className="text-gray-600 mt-2 font-Opensans">
              Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit.Lorem ipsum dolor sit amet pretium consectetur adipiscing elit.
            </p>
            <button className="mt-4 bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition font-Raleway">
              Get Started
            </button>
          </div>

          {/* Right Image */}
          <div className="md:w-1/2 mt-6 md:mt-0 md:ml-6">
            <img
              src={aboutimg}
              alt="Soccer Ball in Goal"
              className="rounded-lg shadow-md w-full md:w-96 mx-auto" 
            />
          </div>
        </div>
      </div>

 
        {/* Features Section */}
<div id="features" className="py-20 bg-white">
  <div className="p-6">
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4 font-Raleway">What We Offer</h1>
      <p className="text-lg mb-8 font-Opensans">
        We are a passionate team dedicated to providing the best service and products for our users.<br></br> Our mission is to revolutionize the industry with cutting-edge solutions and a user-centric approach.
      </p>
    </div>

    {/* Cards Section */}
    <div className="flex flex-col sm:flex-row justify-center space-y-8 sm:space-x-8 sm:space-y-0">
      {/* Card 1 */}
      <div className="flex flex-col items-center p-6 bg-gray-100 rounded-lg shadow-lg text-center w-full sm:w-auto">
        <FontAwesomeIcon icon={faFutbol} style={{ fontSize: '100px', color: "#0a0a0a" }} />
        <h3 className="text-xl font-semibold mt-4">Football</h3>
        <p className="text-md mt-2">This is some text about the football service we offer. Great feature for users!</p>
      </div>

      {/* Card 2 */}
      <div className="flex flex-col items-center p-6 bg-gray-100 rounded-lg shadow-lg text-center w-full sm:w-auto">
        <FontAwesomeIcon icon={faFutbol} style={{ fontSize: '100px', color: "#0a0a0a" }} />
        <h3 className="text-xl font-semibold mt-4">Football </h3>
        <p className="text-md mt-2">This is another exciting feature related to football. Revolutionizing the game!</p>
      </div>

      {/* Card 3 */}
      <div className="flex flex-col items-center p-6 bg-gray-100 rounded-lg shadow-lg text-center w-full sm:w-auto">
        <FontAwesomeIcon icon={faFutbol} style={{ fontSize: '100px', color: "#0a0a0a" }} />
        <h3 className="text-xl font-semibold mt-4">Football </h3>
        <p className="text-md mt-2">More insights into the football-related features we bring to the table.</p>
      </div>
    </div>
  </div>
</div>









     {/* Pricing Section */}
  <div id="pricing" className="py-20 bg-slate-100">
  <div className="flex flex-col sm:flex-row justify-center gap-6 p-8">

    {/* Basic Plan */}
    <div className="w-full sm:w-80 lg:w-96 xl:w-96 border rounded-lg p-6 bg-white shadow-md transition-all duration-300 hover:shadow-lg">
      <h3 className="text-xl font-semibold text-gray-800 font-Raleway">Basic</h3>
      <p className="text-gray-600 mt-2 font-Opensans">Lorem ipsum dolor sit amet premium consectetur adipiscing elit.</p>
      <button className="w-full bg-yellow-400 font-Raleway text-black py-2 mt-4 rounded-lg font-semibold hover:bg-yellow-500 transition">
        Get Started
      </button>
      <ul className="mt-4 space-y-2 text-gray-600 font-Opensans">
        <li>✔ Lorem ipsum dolor</li>
        <li>✔ Lorem ipsum dolor</li>
        <li>✔ Lorem ipsum dolor</li>
        <li>✔ Lorem ipsum dolor</li>
        
      </ul>
    </div>

    {/* Premium Plan */}
    <div className="w-full sm:w-80 lg:w-96 xl:w-96 border-2 bg-white border-red-500 rounded-lg p-6 shadow-md relative transition-all duration-300 hover:shadow-lg">
      <span className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-red-500 text-white text-sm px-3 py-1 rounded-full">
        Popular
      </span>
      <h3 className="text-xl font-semibold text-gray-800 font-Raleway">Premium</h3>
      <p className="text-gray-600 mt-2 font-Opensans">Lorem ipsum dolor sit amet premium consectetur adipiscing elit.</p>
      <button className="w-full bg-yellow-400 font-Opensans text-black py-2 mt-4 rounded-lg font-semibold hover:bg-yellow-500 transition">
        Get Started
      </button>
      <ul className="mt-4 space-y-2 text-gray-600 font-Opensans">
        <li>✔ Lorem ipsum dolor</li>
        <li>✔ Lorem ipsum dolor</li>
        <li>✔ Lorem ipsum dolor</li>
        <li>✔ Lorem ipsum dolor</li>
        <li>✔ Lorem ipsum dolor</li>
      </ul>
    </div>

  </div>
</div>

     {/* Contact Section */}
<div id="contact" className="py-20 bg-white">
  <div className="bg-[#f8fefa] p-10">
    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
      {/* Get in Touch Section */}
      <div className="bg-yellow-100 p-6 rounded-lg">
        <h2 className="text-lg font-bold font-Raleway">Get in Touch</h2>
        <div className="mt-4">
          <p className="font-semibold font-Raleway">Visit us</p>
          <p className="text-gray-600 font-Opensans">Lorem ipsum dolor sit amet pretium consectetur adipiscing elit.</p>
        </div>
        <div className="mt-4">
          <p className="font-semibold">Chat to us</p>
          <p className="text-gray-600 font-Opensans">Lorem ipsum dolor sit amet pretium consectetur adipiscing elit.</p>
        </div>
        <div className="mt-4">
          <p className="font-semibold">Call us</p>
          <p className="text-gray-600 font-Opensans">Lorem ipsum dolor sit amet pretium consectetur adipiscing elit.</p>
        </div>
        <div className="mt-4 flex space-x-3 text-xl">
          <FontAwesomeIcon icon={faLinkedin} className="cursor-pointer" />
          <FontAwesomeIcon icon={faFacebook} className="cursor-pointer" />
          <FontAwesomeIcon icon={faTwitter} className="cursor-pointer" />
          <FontAwesomeIcon icon={faInstagram} className="cursor-pointer" />
        </div>
      </div>

      {/* Form Section */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <div className="grid md:grid-cols-2 gap-4">
          <input type="text" placeholder="First Name" className="border p-2 w-full rounded font-Opensans" />
          <input type="text" placeholder="Last Name" className="border p-2 w-full rounded font-Opensans" />
        </div>
        <input type="email" placeholder="Email id" className="border p-2 w-full rounded mt-4 font-Opensans" />
        <div className="flex gap-2 mt-4 font-Opensans">
          <input type="text" placeholder="Code" className="border p-2 w-1/4 rounded font-Opensans" />
          <input type="text" placeholder="Your Phone" className="border p-2 w-3/4 rounded font-Opensans" />
        </div>
        <textarea placeholder="Message" className="border p-2 w-full rounded mt-4 h-24 font-Opensans"></textarea>
        <div className="mt-2 flex items-center text-sm">
          <input type="checkbox" className="mr-2 font-Opensans" />
          <span>I'd like to receive more information about the company, I understand and agree to the <span className="text-blue-600">Privacy Policy</span></span>
        </div>
        <button className="w-full bg-[#FE221E] text-white py-2 mt-4 rounded-lg font-semibold font-Raleway">
          Send Message
        </button>
      </div>
    </div>
  </div>
</div>

       {/* Footer */}
<div className="bg-gray-950 text-white py-12">
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
