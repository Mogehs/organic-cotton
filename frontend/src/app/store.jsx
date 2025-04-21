// src/store.js
import { configureStore } from '@reduxjs/toolkit';

import shopReducer from "../features/shop/shopSlice";


import cartReducer from "../features/cart/cartSlice";
import sliderReducer from "../features/slider/sliderSlice";

import blogReducer from "../features/blog/blogSlice";



const store = configureStore({
  reducer: {
    shop: shopReducer, 
    cart:cartReducer,
    slider:sliderReducer,
    blog:blogReducer,
  },
});

export default store;
