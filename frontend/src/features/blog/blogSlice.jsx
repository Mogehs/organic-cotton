import { createSlice } from "@reduxjs/toolkit";
import blogPosts from "./Blogs.jsx"; 

const initialState = {
  posts: blogPosts,
  filteredPosts: blogPosts,
  selectedTag: null,
};

const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    filterByTag: (state, action) => {
      const tag = action.payload;
      state.selectedTag = tag;
      state.filteredPosts = tag
        ? state.posts.filter((post) => post.tags.includes(tag))
        : state.posts;
    },
    resetFilter: (state) => {
      state.selectedTag = null;
      state.filteredPosts = state.posts;
    },
  },
});

export const { filterByTag, resetFilter } = blogSlice.actions;
export default blogSlice.reducer;
