import React from "react";
import { useNavigate } from "react-router-dom";
import football from "../assets/images/football.jpg";

const Login: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="relative w-screen h-screen flex items-center justify-between px-20">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${football})` }}
      ></div>

      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Left Side - Welcome Text */}
      <div className="relative text-left text-white z-10">
        <h2 className="text-6xl font-Raleway mb-8">Welcome To Sports App</h2>
        <p className="text-lg text-white max-w-md font-open sans">
          Find expert coaches and mentors to guide students in mastering their game. 
          Connect with top professionals for personalized training, skill development, and strategic insights to elevate performance.
        </p>
      </div>

      {/* Right Side - Login Form */}
      <div className="relative bg-[#F2F3F9] p-8 rounded-lg shadow-2xl z-10 w-full max-w-md">
        <h2 className="text-3xl font-bold text-black mb-8">Login</h2>

        <form>
          <div className="mb-4">
            <label className="block text-black-700 font-medium mb-2">Email ID</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-white-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-black-700 font-medium mb-2">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-white-500"
            />
          </div>

          <div className="mb-4 flex justify-between items-center">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2 " />
              <span className="text-black-700">Remember me</span>
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-[#FE221E] text-white py-2 rounded-lg hover:bg-[#FE221E] transition duration-300">
            Login
          </button>
        </form>

        <div className="mt-4">
          <button
            onClick={() => navigate("/forgot-password")} // Redirect to Forgot Password Page
            className="text-[#FA6357] hover:underline cursor-pointer">
            Forgot Password?
          </button>
        </div>

        <p className="mt-4 text-black-600">
          Not a member yet?{" "}
          <button
            onClick={() => navigate("/sign-up")}  // Navigate to the Sign Up page
            className="text-[#FA6357] hover:underline cursor-pointer">
            Sign Up
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
