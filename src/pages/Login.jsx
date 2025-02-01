import React, { useState } from "react";
import EarthCanvas from "../components/canvas/Earth";
import { Link } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState({ email: "", password: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    validateField(e.target.name, e.target.value);
  };

  const validateField = (fieldName, value) => {
    let errorText = "";
    if (fieldName === "email" && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
      errorText = "Invalid email address";
    }
    if (fieldName === "password" && value.length < 8) {
      errorText = "Password must be at least 8 characters long";
    }
    setError({ ...error, [fieldName]: errorText });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(error).every((err) => err === "")) {
      setIsSubmitting(true);
      console.log("Login Data:", formData);
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-black text-white">
      {/* Left Section - Login Form */}
      <div className="w-1/3 flex flex-col items-start justify-center p-10 bg-[#13111A] rounded-lg shadow-lg">
        <h2 className="text-4xl font-bold mb-4">Log In</h2>
        <form onSubmit={handleSubmit} className="w-full space-y-4">
          <div>
            <label className="block text-gray-300">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full p-2 border rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                error.email ? "border-red-500" : ""
              }`}
              required
            />
            {error.email && <p className="text-red-500">{error.email}</p>}
          </div>
          <div>
            <label className="block text-gray-300">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={`w-full p-2 border rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                error.password ? "border-red-500" : ""
              }`}
              required
            />
            {error.password && <p className="text-red-500">{error.password}</p>}
          </div>
          <Link to='/verifyEmail'
            type="submit"
            disabled={isSubmitting}
            className={`w-full flex justify-center bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition ${
              isSubmitting ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {isSubmitting ? "Logging in..." : "Log In"}
          </Link>
        </form>
        <p className="text-center text-gray-400 mt-4">
          Don't have an account? <Link to="/signup" className="text-blue-500">Sign up</Link>
        </p>
      </div>

      {/* Right Section - Enlarged 3D Earth */}
      <div className="w-2/3 flex justify-center">
        <div className="w-[600px] h-[600px]"> {/* Increased size */}
          <EarthCanvas />
        </div>
      </div>
    </div>
  );
};

export default Login;
