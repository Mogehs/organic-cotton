import React, { useState } from "react";
import { useRegisterUserMutation } from "../components/features/usersApi";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [registerUser, { isLoading, error }] = useRegisterUserMutation();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await registerUser(formData).unwrap();
      toast.success(res.message);
      navigate(`/otp-verification/${res.userId}`);
    } catch (err) {
      console.error("Registration failed:", err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-[#3b322d] rounded-2xl shadow-lg shadow-[#1f1b18]/50 p-8 text-[#f4e9dc]">
        <h1 className="text-3xl font-bold mb-6 text-center tracking-widest text-[#d6c2aa]">
          Create Account
        </h1>

        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div>
            <label className="block mb-1 text-sm text-[#d6c2aa]">
              Username
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-[#5b4f46] text-[#f4e9dc] placeholder-[#c4b4a2] focus:outline-none focus:ring-2 focus:ring-[#d6c2aa]/40"
              placeholder="yourusername"
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-sm text-[#d6c2aa]">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-[#5b4f46] text-[#f4e9dc] placeholder-[#c4b4a2] focus:outline-none focus:ring-2 focus:ring-[#d6c2aa]/40"
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-sm text-[#d6c2aa]">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-[#5b4f46] text-[#f4e9dc] placeholder-[#c4b4a2] focus:outline-none focus:ring-2 focus:ring-[#d6c2aa]/40"
              placeholder="••••••••"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-[#a88f76] hover:bg-[#c9b79d] text-[#2e2b29] font-semibold py-2 rounded-lg transition duration-300 mt-4"
            disabled={isLoading}
          >
            {isLoading ? "Creating..." : "Sign Up"}
          </button>

          {error && (
            <p className="text-red-400 text-xs text-center mt-2">
              {error?.data?.message || error?.error || "Registration failed."}
            </p>
          )}

          <p className="text-center text-xs mt-4 text-[#cbbba3]">
            Already have an account?{" "}
            <span className="underline cursor-pointer hover:text-[#f4e9dc]">
              Sign In
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
