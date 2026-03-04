import { configureStore } from '@reduxjs/toolkit';

import authReducer from '../features/authSlice';
import moviesReducer from '../features/moviesSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    movies: moviesReducer,
  },
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {auth: user}
export type AppDispatch = typeof store.dispatch;
