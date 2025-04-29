import React, { useState, useRef, useEffect } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { RiArrowDropDownLine } from "react-icons/ri";
import { RxCross1 } from "react-icons/rx";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useLogoutUserMutation } from "../components/features/usersApi";
import { setUser } from "../features/userSlice";
import { toast } from "react-toastify";
import { useGetCartQuery } from "../components/features/cartApi";

const Navbar = () => {
  const user = useSelector((state) => state.user.userData);
  const dispatch = useDispatch();
  const [menufirst, setfirst] = useState(false);
  const [ShowsCart, setShowCart] = useState(false);
  const [AccountCart, setAccountCart] = useState(false);
  const [logoutUser, { isLoading }] = useLogoutUserMutation();
  const { data: cartData, isLoading: cartLoading } = useGetCartQuery();

  const cartRef = useRef(null);
  const accountRef = useRef(null);
  const navigate = useNavigate();

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

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        cartRef.current &&
        !cartRef.current.contains(event.target) &&
        accountRef.current &&
        !accountRef.current.contains(event.target)
      ) {
        setShowCart(false);
        setAccountCart(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const signOut = async () => {
    try {
      await logoutUser();
      dispatch(setUser(null));
      toast.success("User Logged Out Succesfully");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="w-full py-2 bg-[#f5f1e6] text-[#3e3a33] flex justify-between items-center px-5 z-[100] sticky top-0">
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
                <Link to="/" className="hover:text-[#d8cbb3] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="hover:text-[#d8cbb3] transition-colors"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="hover:text-[#d8cbb3] transition-colors"
                >
                  Blogs
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-[#d8cbb3] transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-[#d8cbb3] transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              {user ? (
                <>
                  <li>
                    <Link
                      to="/account"
                      className="hover:text-[#d8cbb3] transition-colors"
                      onClick={MenuDivHidden}
                    >
                      My Account
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/productorders"
                      className="hover:text-[#d8cbb3] transition-colors"
                      onClick={MenuDivHidden}
                    >
                      My Orders
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/cartlist"
                      className="hover:text-[#d8cbb3] transition-colors"
                      onClick={MenuDivHidden}
                    >
                      My Cart
                    </Link>
                  </li>
                  <li>
                    <button
                      onClick={() => {
                        signOut();
                        MenuDivHidden();
                      }}
                      className="bg-dark-color text-white px-3 py-2 rounded hover:bg-[#d8cbb3] transition-colors"
                    >
                      Sign Out
                    </button>
                  </li>
                </>
              ) : (
                <li>
                  <button
                    onClick={() => {
                      navigate("/sign-in");
                      MenuDivHidden();
                    }}
                    className="bg-dark-color text-white px-3 py-2 rounded hover:bg-[#d8cbb3] transition-colors"
                  >
                    Sign In
                  </button>
                </li>
              )}
            </ul>
          </div>
        </div>
      )}

      <div className="flex items-center">
        <div className="text-3xl font-extrabold cursor-pointer">
          <img
            src="/logo.png"
            alt="Logo"
            className="object-cover w-20 sm:w-30 sm:h-14"
          />
        </div>
        <ul className="hidden md:flex gap-6 text-lg ml-10 font-semibold">
          <li>
            <Link to="/" className="hover:text-[#d8cbb3] transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/products"
              className="hover:text-[#d8cbb3] transition-colors"
            >
              Products
            </Link>
          </li>
          <li>
            <Link to="/blog" className="hover:text-[#d8cbb3] transition-colors">
              Blogs
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="hover:text-[#d8cbb3] transition-colors"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="hover:text-[#d8cbb3] transition-colors"
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
            className="flex items-center gap-2 text-md font-bold hover:text-[#d8cbb3] transition-colors cursor-pointer"
            onClick={LookShowCart}
          >
            My Cart <FiShoppingCart className="text-xl" />
          </button>

          {ShowsCart && (
            <div className="absolute top-14 right-28 bg-[#3e3a33] w-56 rounded p-2 shadow-xl z-30">
              <ul className="">
                {cartLoading ? (
                  <p>Loading Cart Items....</p>
                ) : (
                  <>
                    {cartData?.products?.map((item, i) => (
                      <li
                        key={i}
                        className="text-white flex items-center gap-8 border border-[#d8cbb3] rounded-md p-2 mx-auto"
                      >
                        <img
                          src={item?.productId?.image}
                          alt={item?.productId?.name}
                          className="h-12 w-12 object-cover rounded-md"
                        />
                        <Link
                          to={`/cart/${item?.productId?._id}`}
                          className="text-white hover:underline"
                        >
                          {item?.productId?.name}
                        </Link>
                        <p>{item?.quantity}</p>
                      </li>
                    ))}
                  </>
                )}

                {cartData?.products?.length !== 0 ? (
                  <Link to="/cartlist">
                    <button className="mt-3 w-full bg-white hover:bg-[#d8cbb3] py-2 rounded font-semibold">
                      Proceed to Checkout
                    </button>
                  </Link>
                ) : (
                  <p className="text-white text-center">Cart Is Empty</p>
                )}
              </ul>
            </div>
          )}
        </div>

        {user ? (
          <div ref={accountRef}>
            <button
              className="flex items-center gap-1 text-md font-bold hover:text-[#d8cbb3] transition-colors cursor-pointer"
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
                    <Link to="/productorders">My Orders</Link>
                  </li>

                  <hr className="pb-2" />
                  <li className="mt-3 w-full text-amber-950 bg-white hover:bg-[#d8cbb3] p-2 rounded font-semibold cursor-pointer">
                    <button onClick={signOut} disabled={isLoading}>
                      Sign-Out
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>
        ) : (
          <div
            className="bg-dark-color text-white rounded-md px-2 py-1 cursor-pointer"
            onClick={() => navigate("/sign-in")}
          >
            Sign-In
          </div>
        )}
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
