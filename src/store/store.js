import { configureStore } from '@reduxjs/toolkit';
import cart from './cartSlice';
import showItems from './showItemsSlice';

export default configureStore({
  reducer: {
    cart: cart.reducer,
    showItems: showItems.reducer,
  },
});
