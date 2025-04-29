import React, { useState, useEffect } from "react";
import {
  useDeleteUserMutation,
  useGetUserProfileQuery,
  useUpdateUserProfileMutation,
} from "../components/features/usersApi";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../features/userSlice";

const Profile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    data: user,
    isLoading,
    isError,
    error,
    refetch,
  } = useGetUserProfileQuery();

  const [updateUser] = useUpdateUserProfileMutation();
  const [deleteUser] = useDeleteUserMutation();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    username: "",
  });

  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name || "",
        phone: user.phone || "",
        address: user.address || "",
        username: user.username || "",
      });
    }
  }, [user]);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateUser({ id: user._id, data: formData }).unwrap();
      toast.success("Profile updated successfully!");
      refetch();
    } catch (err) {
      console.error("Update failed:", err);
      toast.error("Update failed. Please try again.");
    }
  };

  const handleDelete = async () => {
    try {
      await deleteUser(user?._id).unwrap();
      localStorage.removeItem("user");
      dispatch(setUser(null));
      toast.success("Account deleted successfully");
      navigate("/");
    } catch (err) {
      toast.error("Failed to delete account");
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-dark">
        <div className="text-white text-lg animate-pulse">
          Loading profile...
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-dark text-red-500">
        <div>
          <p>Failed to load profile. Please try again later.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-dark text-black p-4 md:p-10 transition-all">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Sidebar */}
        <div className="bg-medium rounded-2xl p-6 shadow-lg text-center md:col-span-1">
          <h2 className="mt-4 text-2xl font-bold">{formData.name}</h2>
          <p className="text-light text-sm mt-1">{user?.email}</p>
        </div>

        {/* Form */}
        <div className="bg-medium rounded-2xl p-6 shadow-lg md:col-span-2">
          <h3 className="text-xl font-semibold border-b border-light pb-3 mb-4">
            Account Information
          </h3>
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            <div>
              <label className="block text-sm text-gray-400 mb-1">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 rounded bg-dark border border-light text-black"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-1">
                Username
              </label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="w-full p-2 rounded bg-dark border border-light text-black"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-1">Email</label>
              <input
                type="email"
                value={user?.email}
                disabled
                className="w-full p-2 rounded bg-dark border border-light text-black cursor-not-allowed"
              />
              <p className="text-neutral-400 text-xs mt-1">
                You can't change your email
              </p>
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-1">Phone</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-2 rounded bg-dark border border-light text-black"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm text-gray-400 mb-1">
                Address
              </label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="w-full p-2 rounded bg-dark border border-light text-black"
              />
            </div>
            <div className="sm:col-span-2 flex justify-end gap-4">
              <button
                type="submit"
                className="px-5 py-2 rounded bg-light text-dark font-semibold hover:bg-[#a89f8e] transition-colors"
              >
                Save Changes
              </button>
              <button
                type="button"
                className="px-5 py-2 rounded bg-dark-color hover:bg-light-color font-semibold transition-colors text-white hover:text-black"
                onClick={handleDelete}
              >
                Delete Account
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
