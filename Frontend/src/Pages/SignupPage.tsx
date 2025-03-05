import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import football from "../assets/images/football.jpg";
import * as countryCodes from "country-codes-list";


const SignupPage: React.FC = () => {
  const navigate = useNavigate();
  const [countryList, setCountryList] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const myCountryCodesObject = countryCodes.customList(
      "countryCode",
      "+{countryCallingCode} ({countryNameEn})"
    );
    setCountryList(Object.values(myCountryCodesObject));
  }, []);

  const filteredCountries = countryList.filter((country) =>
    country.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelect = (country: string) => {
    setSearchTerm(country);
    setShowDropdown(false);
  };

  return (
    <div className="relative w-full min-h-screen flex flex-col lg:flex-row items-center justify-center px-6 lg:px-20">

      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center " style={{ backgroundImage: `url(${football})` }}></div>

      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Left Side - Welcome Text */}
      <div className="relative text-center lg:text-left text-white z-10 lg:w-1/2 px-6 lg:px-0 mb-8 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl  lg:text-5xl font-Raleway mb-4">Welcome To Sports App</h2>
        <p className="text-sm sm:text-base lg:text-lg max-w-xs sm:max-w-md lg:max-w-none mx-auto lg:mx-0 font-Opensans">
          Find expert coaches and mentors to guide students in mastering their game.
          Connect with top professionals for personalized training, skill development, and strategic insights to elevate performance.
        </p>
      </div>

      {/* Right Side - Login Form */}
      <div className="relative bg-slate-100 p-6 sm:p-8 rounded-lg shadow-2xl z-10 w-full max-w-lg mx-auto lg:w-[500px] mt-12 sm:mt-16 lg:mt-0">
      <h2 className="text-3xl font-bold text-black mb-6">Sign Up </h2>

        <form>
        <div className="flex space-x-4 mb-4">
  <div className="w-1/2">
    <label className="block text-black-700 font-medium mb-2">First Name</label>
    <input
      type="text"
      placeholder="First Name"
      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-white-500"
    />
  </div>
  <div className="w-1/2">
    <label className="block text-black-700 font-medium mb-2">Last Name</label>
    <input
      type="text"
      placeholder="Last Name"
      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-white-500"
    />
  </div>
</div>
          <div className="mb-4">
            <label className="block text-black-700 font-medium mb-2">Email ID</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-white-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-black-700 font-medium mb-2"> New Password</label>
            <input
              type="new password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-white-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-black-700 font-medium mb-2"> Confirm Password</label>
            <input
              type="confirm password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-white-500"
            />
          </div>
          <div className="flex space-x-4 mb-4">
          <div className="w-1/3 relative">
      <label className="block text-black-700 font-medium mb-2">Country Code</label>
      <input
        type="text"
        placeholder="Search country code..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onFocus={() => setShowDropdown(true)}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-white-500"
      />
      {showDropdown && filteredCountries.length > 0 && (
        <ul className="absolute w-full bg-white border border-gray-300 rounded-lg shadow-md mt-1 max-h-40 overflow-y-auto z-10">
          {filteredCountries.map((country, index) => (
            <li
              key={index}
              onClick={() => handleSelect(country)}
              className="px-4 py-2 cursor-pointer hover:bg-gray-200"
            >
              {country}
            </li>
          ))}
        </ul>
      )}
    </div> 
     <div className="w-2/3">
    <label className="block text-black-700 font-medium mb-2">Mobile Number</label>
    <input
      type="text"
      placeholder="Mobile Number"
      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-white-500"
      maxLength={10}
      pattern="[0-9]{10}"
    />
  </div>
</div>
<div className="mb-4 flex justify-between items-center">
  <label className="flex items-center">
    <input type="checkbox" className="mr-2" required />
    <span className="text-black-700">
      I agree to the <a href="/terms" className="text-blue-600 underline" target="_blank">Terms and Conditions</a>
    </span>
  </label>
</div>
          <button
            onClick={() => navigate("/")}
            type="submit"
            className="w-full bg-[#FE221E] text-white py-2 rounded-lg hover:bg-[#FE221E] transition duration-300"
          >
            Sign Up
          </button>

          <p className="mt-4 text-black-600">
          Aleady have an account?{" "}
          <button
            onClick={() => navigate("/Login")}
            className="text-[#FA6357] hover:underline cursor-pointer"
          >
            Login
          </button>
        </p>
        </form>
        </div>
      </div>
  );
};

export default SignupPage;
