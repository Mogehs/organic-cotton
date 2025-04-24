import React from "react";

const SignUp = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-[#3b322d] rounded-2xl shadow-lg shadow-[#1f1b18]/50 p-8 text-[#f4e9dc] font-custom">
        <h1 className="text-3xl font-bold mb-6 text-center tracking-widest text-[#d6c2aa]">
          Create Account
        </h1>

        <form className="flex flex-col gap-4">
          <div>
            <label className="block mb-1 text-sm text-[#d6c2aa]">
              Username
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 rounded-lg bg-[#5b4f46] text-[#f4e9dc] placeholder-[#c4b4a2] focus:outline-none focus:ring-2 focus:ring-[#d6c2aa]/40"
              placeholder="yourusername"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm text-[#d6c2aa]">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 rounded-lg bg-[#5b4f46] text-[#f4e9dc] placeholder-[#c4b4a2] focus:outline-none focus:ring-2 focus:ring-[#d6c2aa]/40"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm text-[#d6c2aa]">
              Password
            </label>
            <input
              type="password"
              className="w-full px-4 py-2 rounded-lg bg-[#5b4f46] text-[#f4e9dc] placeholder-[#c4b4a2] focus:outline-none focus:ring-2 focus:ring-[#d6c2aa]/40"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            className="bg-[#a88f76] hover:bg-[#c9b79d] text-[#2e2b29] font-semibold py-2 rounded-lg transition duration-300 mt-4"
          >
            Sign Up
          </button>

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
