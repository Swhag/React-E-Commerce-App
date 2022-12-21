import { configureStore } from '@reduxjs/toolkit';
import cart from './cartSlice';
import page from './pageSlice';

export default configureStore({
  reducer: {
    cart: cart.reducer,
    page: page.reducer,
  },
});
