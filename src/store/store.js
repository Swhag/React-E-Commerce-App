import { configureStore } from '@reduxjs/toolkit';
import cart from './cartSlice';

export default configureStore({
  reducer: {
    cart: cart.reducer,
  },
});
