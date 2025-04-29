import React from "react";
import CartPage from "../components/cart/CartPage";
import CartBanner from "../components/cart/CartBanner";

const cart = () => {
  return (
    <>
      <CartBanner />
      <CartPage />
    </>
  );
};

export default cart;
