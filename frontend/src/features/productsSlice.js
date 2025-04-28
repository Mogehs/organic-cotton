import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  category: "All",
  price: [10, 10],
};

const product = createSlice({
  name: "category",
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    setPrice: (state, action) => {
      state.price = action.payload;
    },
  },
});

export const { setCategory, setPrice } = product.actions;
export default product.reducer;
