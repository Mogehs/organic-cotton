import React from "react";
import { FaTwitter, FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-dark-color text-white px-2 md:px-10 py-8 pt-12 max-lg:text-center">
      <div className="flex max-lg:flex-col gap-x-30 gap-y-10 max-w-7xl mx-auto">
        <div className="max-w-lg lg:w-1/4 max-lg:mx-auto">
          {/* Left Section */}
          <div className="space-y-3 lg:space-y-6">
            <h2 className="text-4xl font-extrabold">Touche d'ange</h2>
            <p className="text-sm text-gray-200">
              We have clothes that suits your style and which you're proud to
              wear. From women to men.
            </p>
            <div className="flex space-x-4 text-xl text-white max-lg:justify-center">
              <FaTwitter className="cursor-pointer hover:text-blue-400" />
              <FaFacebookF className="cursor-pointer hover:text-blue-600" />
              <FaInstagram className="cursor-pointer hover:text-pink-500" />
              <FaTiktok className="cursor-pointer hover:text-black" />
            </div>
          </div>
        </div>

        {/* Columns */}
        <div className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-4 gap-8 gap-x-20 lg:text-start text-nowrap mx-auto">
          {[
            {
              title: "COMPANY",
              links: ["About", "Features", "Works", "Career"],
            },
            {
              title: "HELP",
              links: [
                "Customer Support",
                "Delivery Details",
                "Terms & Conditions",
                "Privacy Policy",
              ],
            },
            {
              title: "FAQ",
              links: ["Account", "Manage Deliveries", "Orders", "Payments"],
            },
            {
              title: "RESOURCES",
              links: [
                "Free eBooks",
                "Development Tutorial",
                "How to - Blog",
                "Youtube Playlist",
              ],
            },
          ].map((section, i) => (
            <div key={i}>
              <h3 className="font-semibold mb-3.5 text-white">
                {section.title}
              </h3>
              <ul className="space-y-2.5 text-sm text-gray-300">
                {section.links.map((link, j) => (
                  <li key={j} className="cursor-pointer hover:text-white">
                    <a href="#">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 max-w-7xl flex flex-col md:flex-row justify-between items-center border-t border-gray-400 pt-5 mx-auto">
        <p className="text-sm text-gray-300">
          Shop.co © 2000-2025, All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
