import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getMovies } from '../services/apiCall';

const initialState = {
  movieList: [],
  loading: false,
  error: '' as string | null,
};
export const fetchMovies = createAsyncThunk(
  'movies/fetchMovies',
  async (page: string) => {
    return await getMovies(page);
  },
);

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    clearMoviesList: (state) => {
      state.movieList = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchMovies.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.movieList = payload;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'An error occurred';
      });
  },
});

export const { clearMoviesList } = moviesSlice.actions;

export default moviesSlice.reducer;
