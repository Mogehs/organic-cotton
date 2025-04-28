import React, { useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useVerifyOTPMutation } from "../components/features/usersApi";
import { toast } from "react-toastify";

const OTP = () => {
  const { id: userId } = useParams();
  const [verifyOtp, { isLoading, error }] = useVerifyOTPMutation();
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const inputRefs = useRef([]);
  const navigate = useNavigate();

  const handleChange = (e, index) => {
    const { value } = e.target;
    if (/^[0-9]?$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (value && index < 5) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fullOtp = otp.join("");
    if (fullOtp.length === 6) {
      try {
        const res = await verifyOtp({ id: userId, otp: fullOtp }).unwrap();
        toast.success(res.message);
        navigate("/sign-in");
      } catch (err) {
        toast.error(error?.data?.message);
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-dark-color p-8 rounded-2xl shadow-md text-white w-full max-w-sm"
      >
        <h2 className="text-center text-2xl font-semibold mb-6 text-[#f4e9dc]">
          Enter OTP
        </h2>
        <div className="flex justify-between gap-2 mb-6">
          {otp.map((digit, index) => (
            <input
              key={index}
              type="text"
              name={`otp-${index}`}
              maxLength="1"
              value={digit}
              onChange={(e) => handleChange(e, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              ref={(el) => (inputRefs.current[index] = el)}
              className="w-10 h-12 text-center text-lg font-bold border border-[#444] rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-[#d6c2aa]/60"
            />
          ))}
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-[#a88f76] hover:bg-[#c9b79d] text-[#2e2b29] font-semibold py-2 rounded-lg transition duration-300"
        >
          {isLoading ? "Verifying..." : "Verify OTP"}
        </button>
      </form>
    </div>
  );
};

export default OTP;
