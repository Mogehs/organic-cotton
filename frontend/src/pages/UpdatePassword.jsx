import React, { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import { useResetPasswordMutation } from "../components/features/usersApi";

const UpdatePassword = () => {
  const navigate = useNavigate();
  const params = useParams();
  const token = params.id;
  const [resetPassword, { isLoading }] = useResetPasswordMutation();

  const [formData, setFormData] = useState({
    newPassword: "",
    confirmPassword: "",
    token,
  });

  const [showPassword, setShowPassword] = useState({
    newPassword: false,
    confirmPassword: false,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const togglePassword = (field) => {
    setShowPassword({ ...showPassword, [field]: !showPassword[field] });
  };

  const validatePassword = (password) => {
    return (
      password.length >= 8 && /[A-Z]/.test(password) && /\d/.test(password)
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.newPassword !== formData.confirmPassword) {
      toast.error("New password and confirm password must match!");
      return;
    }

    if (!validatePassword(formData.newPassword)) {
      toast.error(
        "Password must be at least 8 characters long, contain an uppercase letter, and a number."
      );
      return;
    }

    try {
      await resetPassword(formData).unwrap();
      toast.success("Password updated successfully!");
      navigate("/sign-in");
    } catch (err) {
      toast.error("Failed to update password.");
    }
  };

  return (
    <div className="flex justify-center  items-center min-h-screen">
      <div className="w-full max-w-md p-8 bg-dark-color rounded-lg shadow-lg text-light-color">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Update Password
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {["newPassword", "confirmPassword"].map((field, index) => (
            <div key={index} className="relative">
              <label className="block text-sm font-medium mb-1">
                {field === "newPassword" ? "New Password" : "Confirm Password"}
              </label>
              <input
                type={showPassword[field] ? "text" : "password"}
                name={field}
                value={formData[field]}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-medium-color border border-light-color text-light-color placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-light-color"
                placeholder="********"
                required
              />
              <span
                onClick={() => togglePassword(field)}
                className="absolute right-3 top-9 cursor-pointer text-light-color"
              >
                {showPassword[field] ? "👁️" : "👁️‍🗨️"}
              </span>
            </div>
          ))}

          <button
            type="submit"
            className={`w-full py-2 rounded-lg transition duration-300 font-semibold ${
              isLoading
                ? "bg-gray-500 cursor-not-allowed text-white"
                : "bg-light-color hover:bg-opacity-90 text-dark-color"
            }`}
            disabled={isLoading}
          >
            {isLoading ? "Updating..." : "Update Password"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdatePassword;
