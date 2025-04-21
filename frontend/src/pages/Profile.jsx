import React from "react";

const Profile = () => {
  return (
    <div className="min-h-screen bg-dark text-black font-custom p-4 md:p-10">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Sidebar Card */}
        <div className="bg-medium rounded-2xl p-6 shadow-lg text-center md:col-span-1">
          <img
            src="/profile.jpg"
            alt="User"
            className="w-32 h-32 mx-auto rounded-full border-4 border-light object-cover"
          />
          <h2 className="mt-4 text-2xl font-bold">John Doe</h2>
          <p className="text-light text-sm mt-1">johndoe@example.com</p>
          <p className="text-gray-400 text-xs mt-1">Member since Jan 2022</p>
          <button className="mt-6 w-full bg-light text-dark py-2 rounded-lg font-semibold hover:bg-[#a89f8e] transition-colors">
            Upload New Photo
          </button>
        </div>

        {/* Info Card */}
        <div className="bg-medium rounded-2xl p-6 shadow-lg md:col-span-2">
          <h3 className="text-xl font-semibold border-b border-light pb-3 mb-4">
            Account Information
          </h3>

          <form className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm text-gray-400 mb-1">
                Full Name
              </label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full p-2 rounded bg-dark border border-light text-black"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-1">
                Username
              </label>
              <input
                type="text"
                placeholder="johndoe123"
                className="w-full p-2 rounded bg-dark border border-light text-black"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-1">Email</label>
              <input
                type="email"
                placeholder="johndoe@example.com"
                disabled
                className="w-full p-2 rounded bg-dark border border-light text-black"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-1">Phone</label>
              <input
                type="text"
                placeholder="+1 234 567 890"
                className="w-full p-2 rounded bg-dark border border-light text-black"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm text-gray-400 mb-1">
                Address
              </label>
              <input
                type="text"
                placeholder="123 Main Street, NY"
                className="w-full p-2 rounded bg-dark border border-light text-black"
              />
            </div>
          </form>

          <div className="mt-6 flex justify-end gap-4">
            <button className="px-5 py-2 rounded bg-light text-dark font-semibold hover:bg-[#a89f8e] transition-colors">
              Save Changes
            </button>
            <button className="px-5 py-2 rounded bg-dark-color hover:bg-light-color font-semibold transition-colors text-white hover:text-black">
              Delete Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
