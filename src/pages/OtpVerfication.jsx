import React, { useState, useEffect } from "react";
import EarthCanvas from "../components/canvas/Earth";
import { useNavigate } from "react-router-dom";

const OtpVerification = () => {
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    document.getElementById("otp").focus();
  }, []);

  const handleChange = (e) => {
    setOtp(e.target.value); // Allows both numbers and characters
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (otp.length !== 6) {
      setError("OTP must be exactly 6 characters");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/user/verify-otp`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ otp }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "OTP verification failed");
      }

      setSuccessMessage("OTP verified successfully! Redirecting...");
      setTimeout(() => {
        navigate("/dashboard");
      }, 2000);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-black text-white">
      <div className="w-1/3 flex flex-col items-start justify-center p-10 bg-[#13111A] rounded-lg shadow-lg">
        <h2 className="text-4xl font-bold mb-4">OTP Verification</h2>

        {successMessage && <p className="text-green-500">{successMessage}</p>}
        {error && <p className="text-red-500">{error}</p>}

        <form onSubmit={handleSubmit} className="w-full space-y-4">
          <div>
            <label className="block text-gray-300">Enter OTP</label>
            <input
              type="text"
              name="otp"
              id="otp"
              value={otp}
              onChange={handleChange}
              className={`w-full p-2 border rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                error ? "border-red-500" : ""
              }`}
              required
            />
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition ${
              isSubmitting ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {isSubmitting ? "Verifying..." : "Verify OTP"}
          </button>
        </form>
      </div>

      <div className="w-2/3 flex justify-center">
        <div className="w-[600px] h-[600px]">
          <EarthCanvas />
        </div>
      </div>
    </div>
  );
};

export default OtpVerification;
