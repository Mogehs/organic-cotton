import { useState } from "react";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { useRegisterUserMutation } from "../components/features/usersApi";

export default function RegisterPage() {
  const [registerUser, { isLoading }] = useRegisterUserMutation();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.name || !formData.email || !formData.password) {
      toast.error("Please fill out all required fields", {
        position: "top-center",
      });
      return;
    }

    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email address", {
        position: "top-center",
      });
      return;
    }

    try {
      const response = await registerUser(formData).unwrap();
      toast.success(response.message);
      return navigate(`/otp-verification/${response.userId}`);
    } catch (error) {
      return toast.error(error?.data?.message);
    }
  };

  return (
    <div className="flex h-fit items-center justify-center p-7">
      <div className="flex flex-col sm:h-fit md:flex-row w-full max-w-4xl bg-light-color shadow-lg rounded-xl overflow-hidden">
        <div className="hidden md:flex w-[70%] bg-light-color items-center justify-start">
          <img
            src="/sign-in.jpg"
            alt="Signup"
            className="w-full h-[33rem] object-cover shadow-lg"
          />
        </div>

        <form
          className="w-full md:w-[65%] flex flex-col p-8"
          onSubmit={handleRegister}
        >
          <h2 className="text-3xl font-bold text-dark mb-10 text-center">
            Create an Account
          </h2>

          <div className="mb-4">
            <label className="block text-dark-color text-md font-medium">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              className="w-full border border-medium p-3 rounded-lg text-dark focus:outline-none focus:ring-2 focus:ring-medium"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-dark text-md font-medium">Email</label>
            <input
              type="email"
              name="email"
              className="w-full border border-medium p-3 rounded-lg text-dark-color focus:outline-none focus:ring-2 focus:ring-medium"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-2">
            <label className="block text-dark-color text-md font-medium">
              Password
            </label>
            <input
              type="password"
              name="password"
              className="w-full border border-medium p-3 rounded-lg text-dark-color focus:outline-none focus:ring-2 focus:ring-medium"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="flex items-center justify-between mb-10">
            <Link
              to="/sign-in"
              className="text-white font-medium cursor-pointer text-sm"
            >
              Already have an Account?
            </Link>
          </div>

          <button
            type="submit"
            className={`w-full bg-dark-color text-white p-3 rounded-lg mt-4 font-semibold hover:bg-medium-color transition duration-300 shadow-md ${
              isLoading ? "cursor-not-allowed opacity-70" : ""
            }`}
            disabled={isLoading}
          >
            {isLoading ? "Creating Account..." : "Create Account"}
          </button>
        </form>
      </div>
    </div>
  );
}
