import React, { useState } from "react";
import { toast } from "react-toastify";
import { useRequestPasswordResetMutation } from "../components/features/usersApi";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [requestPasswordReset] = useRequestPasswordResetMutation();

  const handleSendOtp = () => {
    if (!email.includes("@")) {
      toast.error("Please enter a valid email.", { position: "top-center" });
      return;
    }

    requestPasswordReset(email);
    toast.success("OTP sent successfully!", { position: "top-center" });
    setOtpSent(true);
  };

  return (
    <div className="flex justify-center items-center py-24 bg-light-color min-h-screen">
      <div className="p-8 shadow-2xl rounded-xl bg-white w-[30rem]">
        <h1 className="text-3xl font-bold mb-6 text-center text-dark">
          Forgot Password
        </h1>

        {!otpSent ? (
          <div className="space-y-4">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border border-medium p-3 rounded-lg w-full text-dark focus:outline-none focus:ring-2 focus:ring-medium"
            />
            <button
              onClick={handleSendOtp}
              className="bg-dark-color text-white p-3 rounded-lg w-full hover:bg-medium-color transition duration-300"
            >
              Send Reset Link
            </button>
          </div>
        ) : (
          <div className="text-center text-medium font-medium">
            Password reset link has been sent to your email. Please check your
            inbox.
          </div>
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;
