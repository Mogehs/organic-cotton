// src/store.js
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

// Reducers
import shopReducer from "../features/shop/shopSlice";
import cartReducer from "../features/cart/cartSlice";
import sliderReducer from "../features/slider/sliderSlice";
import blogReducer from "../features/blog/blogSlice";
import userReducer from "../features/userSlice";
import productReducer from "../features/productsSlice";

// RTK Query APIs
import { stripeApi } from "../components/features/stripeApi";
import { cartApi } from "../components/features/cartApi";
import { userApi } from "../components/features/usersApi";
import { productsApi } from "../components/features/productsApi";
import { orderApi } from "../components/features/ordersApi";

// Combine all reducers
const rootReducer = combineReducers({
  shop: shopReducer,
  cart: cartReducer,
  slider: sliderReducer,
  blog: blogReducer,
  user: userReducer,
  product: productReducer,

  [stripeApi.reducerPath]: stripeApi.reducer,
  [cartApi.reducerPath]: cartApi.reducer,
  [userApi.reducerPath]: userApi.reducer,
  [productsApi.reducerPath]: productsApi.reducer,
  [orderApi.reducerPath]: orderApi.reducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create store
const store = configureStore({
  reducer: persistedReducer,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(
      stripeApi.middleware,
      cartApi.middleware,
      userApi.middleware,
      productsApi.middleware,
      orderApi.middleware
    ),
});

// Create persistor
export const persistor = persistStore(store);

export default store;
