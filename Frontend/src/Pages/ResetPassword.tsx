import React, { useState } from "react";

const ResetPassword: React.FC = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");

  // Handle password change validation
  const handleResetPassword = () => {
    if (newPassword !== confirmPassword) {
      setError("Your passwords do not match.");
    } else {
      setError("");
      // Logic for resetting password can go here
      console.log("Password reset successful!");
    }
  };

  // Check if both passwords are filled and match
  const isFormValid = newPassword && confirmPassword && newPassword === confirmPassword;

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-[90%] max-w-md">
        <h2 className="text-3xl font-bold text-center font-Raleway mb-4">Reset Password</h2>
        <p className="text-gray-600 text-center font-Opensans mb-6">
          Set a new password to regain access to your account. Make sure it’s strong and secure.
        </p>

        {/* New Password Input */}
        <div className="mb-4">
          <label className="block text-sm font-Opensans font-medium text-gray-700">New Password</label>
          <div className="relative mt-1">
            <input
              type={showPassword ? "text" : "password"}
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#FE221E]"
              placeholder="Enter your Password"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-3 flex items-center text-gray-600 hover:text-gray-900"
            >
              <i className={showPassword ? "fas fa-eye-slash" : "fas fa-eye"}></i>
            </button>
          </div>
        </div>

        {/* Confirm Password Input */}
        <div className="mb-6">
          <label className="block text-sm font-Opensans font-medium text-gray-700">Confirm Password</label>
          <div className="relative mt-1">
            <input
              type={showConfirmPassword ? "text" : "password"}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#FE221E]"
              placeholder="Enter your Password"
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute inset-y-0 right-3 flex items-center text-gray-600 hover:text-gray-900"
            >
              <i className={showConfirmPassword ? "fas fa-eye-slash" : "fas fa-eye"}></i>
            </button>
          </div>
          {error && <p className="text-[#FE221E] text-sm mt-2">{error}</p>}
        </div>

        {/* Reset Password Button */}
        <button
          className={`w-full py-3 rounded-lg text-sm font-semibold transition ${
            isFormValid ? "bg-[#FE221E] text-white hover:bg-red-500" : "bg-red-400 text-white cursor-not-allowed"
          }`}
          onClick={handleResetPassword}
          disabled={!isFormValid}
        >
          Reset Password
        </button>
      </div>
    </div>
  );
};

export default ResetPassword;
