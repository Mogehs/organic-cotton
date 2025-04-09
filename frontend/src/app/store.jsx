// src/store.js
import { configureStore } from '@reduxjs/toolkit';

import shopReducer from "../features/shop/shopSlice";


import cartReducer from "../features/cart/cartSlice";
import sliderReducer from "../features/slider/sliderSlice";


const store = configureStore({
  reducer: {
    shop: shopReducer, 
    cart:cartReducer,
    slider:sliderReducer,
  },
});

export default store;
