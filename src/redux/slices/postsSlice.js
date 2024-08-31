import { createSlice } from '@reduxjs/toolkit';

const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: [],
    loading: false,
    error: null
  },
  reducers: {
    fetchPostsStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchPostsSuccess: (state, action) => {
      state.posts = action.payload;
      state.loading = false;
    },
    fetchPostsFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    }
  }
});

export const { fetchPostsStart, fetchPostsSuccess, fetchPostsFailure } = postsSlice.actions;
export default postsSlice.reducer;