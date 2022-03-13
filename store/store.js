import { configureStore } from '@reduxjs/toolkit';
import klineSlice from './kline/klineSlice';

export const store = configureStore({
  reducer: {
    kline: klineSlice,
  },
});
