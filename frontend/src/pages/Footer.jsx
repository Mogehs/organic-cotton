import React from "react";
import { FaTwitter, FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-dark-color text-white px-6 py-10 max-lg:text-center">
      <div className="max-w-7xl mx-auto flex flex-col gap-8 lg:flex-row justify-between">
        {/* Left Section */}
        <div className="lg:w-1/4 flex flex-col items-center lg:items-start">
          <div className="space-y-4 text-center lg:text-left">
            <h2 className="text-4xl font-extrabold">Touche d'ange</h2>
            <p className="text-sm text-gray-200">
              We have clothes that suit your style and which you're proud to
              wear. From women to men.
            </p>
            <div className="flex space-x-4 text-xl justify-center lg:justify-start text-white">
              <FaTwitter className="cursor-pointer hover:text-blue-400" />
              <FaFacebookF className="cursor-pointer hover:text-blue-600" />
              <FaInstagram className="cursor-pointer hover:text-pink-500" />
              <FaTiktok className="cursor-pointer hover:text-black" />
            </div>
          </div>
        </div>

        {/* Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-10 lg:gap-20 text-start">
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
              <h3 className="font-semibold mb-3 text-white">{section.title}</h3>
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
      <div className="mt-10 border-t border-gray-400 pt-5 flex flex-col items-center lg:flex-row justify-between mx-auto max-w-7xl">
        <p className="text-sm text-gray-300 text-center lg:text-left">
          Shop.co © 2000-2025, All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
