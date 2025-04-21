import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  removeFromCart,
  clearCart,
} from "../features/cart/cartSlice";
import { Link } from "react-router-dom";
import CartBanner from "../components/cart/CartBanner";

const CartList = ({ theme = "light" }) => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleIncrement = (id) => dispatch(increment(id));
  const handleDecrement = (id) => dispatch(decrement(id));
  const handleRemoveFromCart = (id) => dispatch(removeFromCart(id));
  const handleClearCart = () => dispatch(clearCart());

  if (cartItems.length === 0) {
    return (
      <div className="text-center mt-10 h-[79vh]">
        <div className="text-5xl mb-4">🛒</div>
        <h2 className="text-3xl font-bold mb-2 font-fredoka text-dark-color">
          Cartlist is empty.
        </h2>
        <p className="text-medium-color mb-4">
          No products added in the cartlist. You must add some products to cart
          them.
        </p>
        <Link
          to="/home"
          className=" text-1xl bg-dark-color text-white px-8 py-4 rounded-md hover:bg-medium-color transition-all font-fredoka"
        >
          ⤺ RETURN TO HOME
        </Link>
      </div>
    );
  }

  return (
    <div>
      <CartBanner />
      <div className={`px-4 sm:px-6 md:px-20 py-12 min-h-screen mt-20`}>
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="flex-1 overflow-x-auto">
            <div className="w-full overflow-auto">
              <table className="min-w-[600px] w-full shadow-md rounded overflow-hidden ">
                <thead className="bg-light-color text-sm uppercase text-dark-color hidden sm:table-header-group">
                  <tr>
                    <th className="text-left p-4">Product</th>
                    <th className="text-left p-4">Price</th>
                    <th className="text-left p-4">Quantity</th>
                    <th className="text-left p-4">Remove</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item) => (
                    <tr
                      key={item.id}
                      className="border-b border-dark-color sm:table-row flex flex-col sm:flex-row gap-2 p-4 sm:p-0"
                    >
                      <td className="p-0 sm:p-4 flex items-center gap-4">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-16 h-16 object-cover border rounded"
                        />
                        <span className="text-sm font-medium">
                          {item.title}
                        </span>
                      </td>
                      <td className="p-0 sm:p-4">
                        <span className="sm:hidden text-dark-color block text-xs mb-1">
                          Price
                        </span>
                        ${item.price.toFixed(2)}
                      </td>
                      <td className="p-0 sm:p-4">
                        <span className="sm:hidden text-dark-color block text-xs mb-1">
                          Quantity
                        </span>
                        <div className="flex items-center border rounded px-3 py-1 w-max bg-light-color">
                          <button
                            onClick={() => handleDecrement(item.id)}
                            className="px-2 font-bold text-lg"
                          >
                            −
                          </button>
                          <span className="px-3">{item.quantity}</span>
                          <button
                            onClick={() => handleIncrement(item.id)}
                            className="px-2 font-bold text-lg"
                          >
                            +
                          </button>
                        </div>
                      </td>
                      <td className="p-0 sm:p-4">
                        <span className="sm:hidden text-dark-color block text-xs mb-1">
                          Remove
                        </span>
                        <button
                          onClick={() => handleRemoveFromCart(item.id)}
                          className="text-dark-color hover:text-medium-color transition-all text-xl border-dark-color"
                        >
                          × Remove
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-6 flex flex-col md:flex-row items-center justify-between gap-4">
              <button
                onClick={handleClearCart}
                className="border border-dark-color px-6 py-2 rounded hover:bg-light-color w-full md:w-auto transition-all"
              >
                Clear Cart
              </button>
            </div>
          </div>

          <div className="w-full lg:w-96 p-8 rounded shadow-md space-y-6 ">
            <div>
              <div className="flex justify-between text-lg font-medium">
                <span>Subtotal</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <hr className="my-3" />
            </div>

            <div>
              <h4 className="text-sm font-semibold mb-3">Shipping</h4>
              <form className="space-y-2 text-sm">
                <label className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="shipping"
                      className="accent-dark-color"
                    />
                    <span>Flat rate:</span>
                  </div>
                  <span className="text-medium-color">$20.00</span>
                </label>
                <label className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="shipping"
                      className="accent-black"
                    />
                    <span>Local pickup:</span>
                  </div>
                  <span className="text-medium-color">$25.00</span>
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="shipping"
                    className="accent-black"
                  />
                  <span>Free shipping</span>
                </label>
              </form>
              <hr className="my-4" />
            </div>

            <div className="flex justify-between items-center text-lg font-semibold">
              <span>Total</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>

            <button className="w-full bg-dark-color text-white py-3 rounded hover:bg-medium-color text-sm font-semibold tracking-wide transition-all">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartList;
