import { configureStore } from '@reduxjs/toolkit';
import suplierReduxcer from '../features/suplierSlice'

export const store = configureStore({
  reducer: {
    suplier:suplierReduxcer
  },
});
