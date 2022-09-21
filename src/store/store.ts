import { configureStore } from '@reduxjs/toolkit';

import { movieApi } from '@/store/movieApi';

const rootReducers = {
  [movieApi.reducerPath]: movieApi.reducer,
};

export const store = configureStore({
  reducer: rootReducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(movieApi.middleware), //<-- add middleware
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
