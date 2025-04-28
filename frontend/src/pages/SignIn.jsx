import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLoginUserMutation } from "../components/features/usersApi";
import { useDispatch } from "react-redux";
import { setUser } from "../features/userSlice";

const SignIn = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const [loginUser, { isLoading, error }] = useLoginUserMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await loginUser({ email, password }).unwrap();
      dispatch(setUser(res.user));
      navigate("/");
    } catch (err) {
      console.error("Login failed:", err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-[#3b322d] rounded-2xl shadow-lg shadow-[#1f1b18]/50 p-8 text-[#f4e9dc]">
        <h1 className="text-3xl font-bold mb-6 text-center tracking-widest text-[#d6c2aa]">
          Sign In
        </h1>

        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div>
            <label className="block mb-1 text-sm text-[#d6c2aa]">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 rounded-lg bg-[#5b4f46] text-[#f4e9dc] placeholder-[#c4b4a2] focus:outline-none focus:ring-2 focus:ring-[#d6c2aa]/40"
              placeholder="••••••••"
              required
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="bg-[#a88f76] hover:bg-[#c9b79d] text-[#2e2b29] font-semibold py-2 rounded-lg transition duration-300 mt-4"
          >
            {isLoading ? "Signing In..." : "Sign In"}
          </button>

          {error && (
            <p className="text-red-400 text-sm text-center mt-2">
              {error.data?.message || "Login failed"}
            </p>
          )}

          <p className="text-white text-sm text-center mt-4">
            Don't have an account?{" "}
            <Link to="/sign-up" className="underline">
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
