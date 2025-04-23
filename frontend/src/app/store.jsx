// src/store.js
import { configureStore } from "@reduxjs/toolkit";

import shopReducer from "../features/shop/shopSlice";
import cartReducer from "../features/cart/cartSlice";
import sliderReducer from "../features/slider/sliderSlice";
import blogReducer from "../features/blog/blogSlice";

import { stripeApi } from "../services/stripeApi";
import { cartApi } from "../services/cartApi";
import { userApi } from "../services/userApi";
import { productsApi } from "../services/productsApi";
import { orderApi } from "../services/orderApi";

const store = configureStore({
  reducer: {
    shop: shopReducer,
    cart: cartReducer,
    slider: sliderReducer,
    blog: blogReducer,

    // RTK Query API slices
    [stripeApi.reducerPath]: stripeApi.reducer,
    [cartApi.reducerPath]: cartApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [productsApi.reducerPath]: productsApi.reducer,
    [orderApi.reducerPath]: orderApi.reducer,
  },

  // Adding the RTK Query middleware
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      stripeApi.middleware,
      cartApi.middleware,
      userApi.middleware,
      productsApi.middleware,
      orderApi.middleware
    ),
});

export default store;
