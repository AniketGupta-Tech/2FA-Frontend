import React, { useState, useEffect } from "react";
import EarthCanvas from "../components/canvas/Earth";
import { Link } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
  });
  const [error, setError] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
    general: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    document.getElementById("name").focus();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    validateField(e.target.name, e.target.value);
  };

  const validateField = (fieldName, value) => {
    let errorText = "";

    if (fieldName === "name" && value.length < 3) {
      errorText = "Name must be at least 3 characters long";
    } else if (fieldName === "email" && !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value)) {
      errorText = "Invalid email address";
    } else if (fieldName === "mobile" && !/^\d{10}$/.test(value)) {
      errorText = "Mobile number must be exactly 10 digits";
    } else if (
      fieldName === "password" &&
      !/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(value)
    ) {
      errorText = "Password must be 8+ chars, include uppercase, number & special char";
    }

    setError((prev) => ({ ...prev, [fieldName]: errorText }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError({ ...error, general: "" });
    setSuccessMessage("");

    if (Object.values(error).some((err) => err !== "")) return;

    setIsSubmitting(true);

    try {
      const response = await fetch(`http/localhost:3000/api/user/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Signup failed");
      }

      setSuccessMessage("Signup successful! Redirecting...");
      setFormData({ name: "", email: "", mobile: "", password: "" });

      setTimeout(() => {
        window.location.href = "/login";
      }, 2000);
    } catch (err) {
      setError((prev) => ({ ...prev, general: err.message }));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-black text-white">
      <div className="w-1/3 flex flex-col items-start justify-center p-10 bg-[#13111A] rounded-lg shadow-lg">
        <h2 className="text-4xl font-bold mb-4">Sign Up</h2>
        {successMessage && <p className="text-green-500">{successMessage}</p>}
        {error.general && <p className="text-red-500">{error.general}</p>}

        <form onSubmit={handleSubmit} className="w-full space-y-4">
          <div>
            <label className="block text-gray-300">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full p-2 border rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                error.name ? "border-red-500" : ""
              }`}
              required
            />
            {error.name && <p className="text-red-500">{error.name}</p>}
          </div>
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
            <label className="block text-gray-300">Mobile</label>
            <input
              type="text"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              className={`w-full p-2 border rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                error.mobile ? "border-red-500" : ""
              }`}
              required
            />
            {error.mobile && <p className="text-red-500">{error.mobile}</p>}
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
            {isSubmitting ? "Submitting..." : "Sign Up"}
          </Link>
        </form>
        <p className="text-center text-gray-400 mt-4">
          Already have an account? <Link to="/login" className="text-blue-500">Log in</Link>
        </p>
      </div>

      <div className="w-2/3 flex justify-center">
        <div className="w-[600px] h-[600px]">
          <EarthCanvas />
        </div>
      </div>
    </div>
  );
};

export default Signup;
