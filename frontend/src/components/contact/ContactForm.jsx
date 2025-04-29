import React, { useState } from "react";
import { MdOutlineArrowCircleRight } from "react-icons/md";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // 2. Log form data
    console.log("Form submitted:", formData);
    // 1. Show alert
    alert("Your message has been sent successfully!");

    // 3. Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <div className="bg-white rounded-t-2xl md:rounded-t-[60px] px-6 md:px-12 py-12 md:py-20 max-w-7xl mx-auto shadow-lg md:mt-[-6rem] mt-[-2rem] relative z-10">
      <div className="grid md:grid-cols-2 gap-y-4 items-center">
        {/* Contact Form */}
        <form className="space-y-6 max-md:order-2" onSubmit={handleSubmit}>
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#a17d29]"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#a17d29]"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Phone <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#a17d29]"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Your Message <span className="text-red-500">*</span>
            </label>
            <textarea
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#a17d29]"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="relative overflow-hidden group cursor-pointer flex items-center gap-2 bg-dark-color hover:bg-[#5a4732] border-dark-color text-white px-6 py-3 font-semibold text-lg shadow-md rounded-md transition-all duration-500"
          >
            <span className="relative z-10 flex items-center gap-2">
              Send Data
              <MdOutlineArrowCircleRight className="text-2xl transform translate-x-6 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500" />
            </span>

            {/* Background hover fill effect */}
            <span className="absolute inset-0 hover:bg-[#5a4732] w-0 group-hover:w-full transition-all duration-500 ease-in-out"></span>
          </button>
        </form>

        {/* Image Section */}
        <div className="relative  h-[500px] max-md:h-[auto]  rounded-[60px] overflow-hidden">
          <img src="/contact/5.jpg" alt="Explore" className="w-full h-full " />
          <div className="absolute bottom-10 left-2/7 transform-translate-x-1/2 text-[#a17d29] text-4xl md:text-5xl lg-text-6xl font-semibold italic">
            Explore
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
