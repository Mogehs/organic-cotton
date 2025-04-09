import React, { useState, useRef } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaAngleRight } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menufirst, setfirst] = useState(false);
  const [ShowsCart, setShowCart] = useState(false);
  const [AccountCart, setAccountCart] = useState(false);

  const cartRef = useRef(null);
  const accountRef = useRef(null);

  const MenuDivTrue = () => setfirst(true);
  const MenuDivHidden = () => setfirst(false);

  const LookShowCart = () => {
    setShowCart(!ShowsCart);
    setAccountCart(false);
  };

  const LookAccountCart = () => {
    setAccountCart(!AccountCart);
    setShowCart(false);
  };

  return (
    <div className="w-full py-2 bg-[#f5f1e6] text-[#3e3a33] flex justify-between items-center px-5 z-50 sticky top-0">
      {/* Mobile Menu */}
      {menufirst && (
        <div className="absolute md:hidden top-0 left-0 bg-[#f5f1e6] w-full sm:w-[70vw] h-screen z-40">
          <button
            className="text-2xl mr-1 z-100 float-right pt-5 pr-5"
            onClick={MenuDivHidden}
          >
            <RxCross1 />
          </button>
          <div className="p-4 mt-10">
            <ul className="flex flex-col gap-5 text-xl text-center">
              <li>
                <Link to="/" className="hover:text-[#ff9800] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/shop"
                  className="hover:text-[#ff9800] transition-colors"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to="/blogs"
                  className="hover:text-[#ff9800] transition-colors"
                >
                  Blogs
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-[#ff9800] transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-[#ff9800] transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}

      {/* Logo and Desktop Nav */}
      <div className="flex items-center">
        <div className="text-3xl font-extrabold cursor-pointer">
          <img
            src="/logo.png"
            alt=""
            className="object-cover w-20 sm:w-30 sm:h-14"
          />
        </div>
        <ul className="hidden md:flex gap-6 text-lg ml-10 font-semibold">
          <li>
            <Link to="/" className="hover:text-[#ff9800] transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link to="/shop" className="hover:text-[#ff9800] transition-colors">
              Products
            </Link>
          </li>
          <li>
            <Link
              to="/blogs"
              className="hover:text-[#ff9800] transition-colors"
            >
              Blogs
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="hover:text-[#ff9800] transition-colors"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="hover:text-[#ff9800] transition-colors"
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>

      {/* Desktop Cart & Account */}
      <div className="hidden md:flex items-center gap-6 relative">
        <div ref={cartRef}>
          <button
            className="flex items-center gap-2 text-md font-bold hover:text-[#ff9800] transition-colors"
            onClick={LookShowCart}
          >
            My Cart <FiShoppingCart className="text-xl" />
          </button>

          {ShowsCart && (
            <div className="absolute top-14 right-28 bg-[#3e3a33] w-56 rounded p-4 shadow-xl z-30">
              <ul className="space-y-2 text-center">
                {[...Array(5)].map((_, i) => (
                  <li key={i} className="text-white">
                    <Link to={`/cart/${i + 1}`}>Cart{i + 1}</Link>
                  </li>
                ))}
                <Link to="/cartlist">
                  <button className="mt-3 w-full bg-white hover:bg-light-color py-2 rounded font-semibold">
                    Proceed to Checkout
                  </button>
                </Link>
              </ul>
            </div>
          )}
        </div>

        <div ref={accountRef}>
          <button
            className="flex items-center gap-1 text-md font-bold hover:text-[#ff9800] transition-colors"
            onClick={LookAccountCart}
          >
            Account <RiArrowDropDownLine className="text-3xl" />
          </button>

          {AccountCart && (
            <div className="absolute top-14 right-0 bg-[#3e3a33] w-60 rounded p-4 shadow-xl z-30">
              <ul className="space-y-2 text-center text-white">
                <li>
                  <Link to="/account">My Account</Link>
                </li>
                <li>
                  <Link to="/orders">My Orders</Link>
                </li>
                <li>
                  <Link to="/settings">Settings</Link>
                </li>
                <li>
                  <Link to="/favourites">Favourites</Link>
                </li>
                <li>
                  <Link to="/delivery-address">Delivery Address</Link>
                </li>
                <hr className="pb-2" />
                <li>
                  <Link
                    to="/sign-out"
                    className="mt-3 w-full text-amber-950 bg-white hover:bg-light-color p-2 rounded font-semibold"
                  >
                    Sign Out
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Menu Toggle */}
      <div className="block md:hidden">
        {!menufirst && (
          <button className="text-2xl mr-1" onClick={MenuDivTrue}>
            <GiHamburgerMenu />
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
