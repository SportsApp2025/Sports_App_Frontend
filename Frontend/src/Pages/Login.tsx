import React from "react";
import { useNavigate } from "react-router-dom";
import football from "../assets/images/football.jpg";

const Login: React.FC = () => {
  const navigate = useNavigate();

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
      <div className="relative bg-slate-100 p-6 sm:p-8 rounded-lg shadow-2xl z-10 w-full max-w-md mx-auto lg:w-96 mt-12 sm:mt-16 lg:mt-0">
        <h2 className="text-3xl font-bold text-black mb-6">Login</h2>

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
              <input type="checkbox" className="mr-2" />
              <span className="text-black-700">Remember me</span>
            </label>
          </div>

          <button
            onClick={() => navigate("/")}
            type="submit"
            className="w-full bg-[#FE221E] text-white py-2 rounded-lg hover:bg-[#FE221E] transition duration-300"
          >
            Login
          </button>
        </form>

        <div className="mt-4">
          <button
            onClick={() => navigate("/forgotpassword")}
            className="text-[#FA6357] hover:underline cursor-pointer"
          >
            Forgot Password?
          </button>
        </div>

        <p className="mt-4 text-black-600">
          Not a member yet?{" "}
          <button
            onClick={() => navigate("/SignupPage")}
            className="text-[#FA6357] hover:underline cursor-pointer"
          >
            Sign Up
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
