// src/features/slider/sliderSlice.js
import { createSlice } from "@reduxjs/toolkit";

const sliderSlice = createSlice({
  name: 'slider',
  initialState: {
    index: 0,
  },
  reducers: {
    nextSlide: (state) => {
      state.index = (state.index + 1) % 3;
    },
    prevSlide: (state) => {
      state.index = (state.index - 1 + 3) % 3;
    },
    setIndex: (state, action) => {
      state.index = action.payload;
    }
  }
});

export const { nextSlide, prevSlide, setIndex } = sliderSlice.actions;
export default sliderSlice.reducer;
